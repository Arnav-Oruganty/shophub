import { createDB } from "../db.js";

export async function getProducts(req, res) {
  try {
    const db = await createDB();
    const products = await db.all("SELECT * FROM products");
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
}
