import React from "react";
import { Package } from "lucide-react";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="card">
      <div className="product-img">
        <Package size={50} color="#0d9488" />
      </div>

      <h3 style={{ marginTop: "12px", fontWeight: "600" }}>{product.name}</h3>
      <p style={{ marginTop: "4px", color: "#6b7280" }}>{product.description}</p>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "12px" }}>
        <span style={{ fontSize: "20px", fontWeight: "700", color: "#0d9488" }}>
          ${product.price}
        </span>
        <span style={{ color: "#6b7280" }}>{product.quantity} left</span>
      </div>

      <button onClick={() => onAdd(product)} className="btn-primary" style={{ marginTop: "12px" }}>
        Add to Cart
      </button>
    </div>
  );
}
