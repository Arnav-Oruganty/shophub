import React from "react";
import { Package } from "lucide-react";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="card">
<<<<<<< HEAD
      <div className="product-img" style={{ width: '100%', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0fdfa', borderRadius: '8px', overflow: 'hidden' }}>
        {product.image ? (
          <img src={product.image} alt={product.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', borderRadius: '8px' }} />
        ) : (
          <Package size={50} color="#0d9488" />
        )}
=======
      <div className="product-img">
        <Package size={50} color="#0d9488" />
>>>>>>> ec696a6c767045ab64e81093db464f61a66388a5
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
