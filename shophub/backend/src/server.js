import express from "express";
import cors from "cors";
import productRoutes from "./routes/products.js";
import cartRoutes from "./routes/cart.js";
import orderRoutes from "./routes/orders.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ShopHub Backend Running!");
});

app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/orders", orderRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("ShopHub Backend API is running.");
});

