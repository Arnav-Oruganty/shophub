import React from "react";
import { Package } from "lucide-react";
import { useShop } from "../context/ShopContext";

export default function OrdersPage() {
  const { userOrders } = useShop();

  return (
    <div className="container">
      <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "20px" }}>
        Your Orders
      </h2>

      {userOrders.length === 0 ? (
        <div className="card" style={{ textAlign: "center" }}>
          <Package size={50} color="#9ca3af" />
          <p style={{ marginTop: "10px" }}>You have no orders</p>
        </div>
      ) : (
        userOrders.map((order) => (
          <div key={order.orderId} className="card">
            <h3 style={{ fontSize: "20px", fontWeight: "700" }}>
              Order #{order.orderId}
            </h3>

            <p style={{ color: "#6b7280" }}>
              {order.date} — {order.status}
            </p>

            <hr style={{ margin: "14px 0" }} />

            {order.items.map((item) => (
              <div key={item.productId} style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}

            <p style={{ marginTop: "14px", fontWeight: "700", color: "#0d9488" }}>
              Total: ${order.total}
            </p>

            <p style={{ marginTop: "8px" }}>
              <b>Address:</b> {order.address.street}, {order.address.city},{" "}
              {order.address.state} — {order.address.pincode}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
