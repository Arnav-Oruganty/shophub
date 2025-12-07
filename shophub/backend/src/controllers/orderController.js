import { createDB } from "../db.js";

export async function createOrder(req, res) {
  const { username, address, items } = req.body;

  if (!username || !address || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "Invalid order payload" });
  }

  const { street, city, state, pincode } = address;
  if (!street || !city || !state || !pincode) {
    return res.status(400).json({ error: "Incomplete address" });
  }

  try {
    const db = await createDB();
    await db.exec("BEGIN TRANSACTION");

    let total = 0;
    const enrichedItems = [];

    for (const item of items) {
      const product = await db.get(
        "SELECT * FROM products WHERE productId = ?",
        item.productId
      );
      if (!product) continue;

      const qty = item.quantity ?? 1;
      const lineTotal = product.price * qty;
      total += lineTotal;

      enrichedItems.push({
        productId: product.productId,
        name: product.name,
        price: product.price,
        quantity: qty,
      });
    }

    const status = "Processing";
    const date = new Date().toLocaleDateString();

    const result = await db.run(
      `INSERT INTO orders (userId, total, status, date, street, city, state, pincode)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      username,
      total,
      status,
      date,
      street,
      city,
      state,
      pincode
    );

    const orderId = result.lastID;

    for (const item of enrichedItems) {
      await db.run(
        `INSERT INTO order_items (orderId, productId, name, price, quantity)
         VALUES (?, ?, ?, ?, ?)`,
        orderId,
        item.productId,
        item.name,
        item.price,
        item.quantity
      );
    }

    await db.exec("COMMIT");

    res.status(201).json({
      orderId,
      userId: username,
      total: total.toFixed(2),
      status,
      date,
      address,
      items: enrichedItems,
    });
  } catch (err) {
    console.error("Error creating order:", err);
    try {
      const db = await createDB();
      await db.exec("ROLLBACK");
    } catch (_) {}
    res.status(500).json({ error: "Failed to create order" });
  }
}

// GET /orders/:username
export async function getOrdersForUser(req, res) {
  const { username } = req.params;

  try {
    const db = await createDB();
    const orders = await db.all(
      "SELECT * FROM orders WHERE userId = ? ORDER BY orderId DESC",
      username
    );

    const result = [];
    for (const order of orders) {
      const items = await db.all(
        "SELECT * FROM order_items WHERE orderId = ?",
        order.orderId
      );
      result.push({
        orderId: order.orderId,
        userId: order.userId,
        total: order.total.toFixed ? order.total.toFixed(2) : order.total,
        status: order.status,
        date: order.date,
        address: {
          street: order.street,
          city: order.city,
          state: order.state,
          pincode: order.pincode,
        },
        items,
      });
    }

    res.json(result);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
}
