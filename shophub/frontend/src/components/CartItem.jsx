import React from "react";
import { Package } from "lucide-react";

export default function CartItem({ item, onDecrease, onIncrease, onRemove }) {
  return (
    <div className="card">
      <div className="product-img" style={{ width: '100%', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0fdfa', borderRadius: '8px', overflow: 'hidden' }}>
        {item.image ? (
          <img src={item.image} alt={item.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', borderRadius: '8px' }} />
        ) : (
          <Package size={50} color="#0d9488" />
        )}
      </div>

      <h3 style={{ marginTop: "12px", fontWeight: "600" }}>{item.name}</h3>
      <p style={{ marginTop: "4px", color: "#6b7280" }}>{item.description}</p>

      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "12px" }}>
        <span style={{ fontSize: "20px", fontWeight: "700", color: "#0d9488" }}>
          ${item.price}
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "16px" }}>
        <button
          onClick={onDecrease}
          aria-label="Decrease quantity"
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #f0fdfa 60%, #d1fae5 100%)",
            border: "none",
            boxShadow: "0 2px 8px rgba(13,148,136,0.08)",
            color: "#0d9488",
            fontWeight: 700,
            fontSize: 20,
            transition: "background 0.2s, color 0.2s",
            cursor: "pointer"
          }}
          onMouseOver={e => e.currentTarget.style.background = "#a7f3d0"}
          onMouseOut={e => e.currentTarget.style.background = "linear-gradient(135deg, #f0fdfa 60%, #d1fae5 100%)"}
        >
          -
        </button>
        <span style={{
          minWidth: 40,
          textAlign: "center",
          fontWeight: 600,
          fontSize: 18,
          color: "#0d9488",
          background: "#f0fdfa",
          borderRadius: 8,
          padding: "6px 12px"
        }}>{item.quantity}</span>
        <button
          onClick={onIncrease}
          aria-label="Increase quantity"
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #f0fdfa 60%, #d1fae5 100%)",
            border: "none",
            boxShadow: "0 2px 8px rgba(13,148,136,0.08)",
            color: "#0d9488",
            fontWeight: 700,
            fontSize: 20,
            transition: "background 0.2s, color 0.2s",
            cursor: "pointer"
          }}
          onMouseOver={e => e.currentTarget.style.background = "#a7f3d0"}
          onMouseOut={e => e.currentTarget.style.background = "linear-gradient(135deg, #f0fdfa 60%, #d1fae5 100%)"}
        >
          +
        </button>
        <button
          onClick={onRemove}
          className="text-red-600 hover:text-red-800 text-sm ml-4"
          style={{
            fontWeight: 600,
            padding: "8px 16px",
            borderRadius: 8,
            background: "#fee2e2",
            border: "none",
            color: "#b91c1c",
            boxShadow: "0 2px 8px rgba(185,28,28,0.08)",
            cursor: "pointer",
            transition: "background 0.2s, color 0.2s"
          }}
          onMouseOver={e => { e.currentTarget.style.background = "#fca5a5"; e.currentTarget.style.color = "#7f1d1d"; }}
          onMouseOut={e => { e.currentTarget.style.background = "#fee2e2"; e.currentTarget.style.color = "#b91c1c"; }}
        >
          Remove
        </button>
      </div>
    </div>
    );
}
