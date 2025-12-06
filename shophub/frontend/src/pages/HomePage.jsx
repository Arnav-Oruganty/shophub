import React, { useState } from "react";
import { Search } from "lucide-react";
import { useShop } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const { products, addToCart } = useShop();
  const [search, setSearch] = useState("");

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <div style={{ position: "relative", marginBottom: "20px" }}>
        <Search size={20} color="#9ca3af" style={{ position: "absolute", top: "12px", left: "12px" }} />
        <input
          className="input"
          placeholder="Search products..."
          style={{ paddingLeft: "40px" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-3">
        {filtered.map((product) => (
          <ProductCard key={product.productId} product={product} onAdd={addToCart} />
        ))}
      </div>
    </div>
  );
}
