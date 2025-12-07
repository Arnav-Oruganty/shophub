import { createDB } from "../db.js";

export async function calculateCartTotal(req, res) {
  const { items } = req.body;

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "Cart items required" });
  }

  try {
    const db = await createDB();
    let total = 0;
    const detailedItems = [];

    for (const item of items) {
      const product = await db.get(
        "SELECT * FROM products WHERE productId = ?",
        item.productId
      );
      if (!product) continue;

      const qty = item.quantity ?? 1;
      const lineTotal = product.price * qty;
      total += lineTotal;

      detailedItems.push({
        productId: product.productId,
        name: product.name,
        price: product.price,
        quantity: qty,
        lineTotal,
      });
    }

    res.json({ total, items: detailedItems });
  } catch (err) {
    console.error("Error calculating cart:", err);
    res.status(500).json({ error: "Failed to calculate cart total" });
  }
}
