import React from "react";
import { User } from "lucide-react";
import { useShop } from "../context/ShopContext";

export default function ProfilePage() {
  const { currentUser, userOrders } = useShop();

  const totalSpent = userOrders.reduce(
    (sum, order) => sum + parseFloat(order.total),
    0
  );

  return (
    <div className="container" style={{ maxWidth: "600px" }}>

      <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "20px" }}>
        Profile
      </h2>

      <div className="card">

        {/* Avatar */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
          <div className="profile-avatar">
            <User size={40} color="white" />
          </div>
          <div>
            <h3 style={{ fontSize: "20px", fontWeight: "700" }}>{currentUser.username}</h3>
            <p style={{ color: "#6b7280" }}>{currentUser.email}</p>
          </div>
        </div>

        <div className="card" style={{ background: "#f3f4f6", boxShadow: "none" }}>
          <p><b>User ID:</b> {currentUser.userId}</p>
          <p><b>Email:</b> {currentUser.email}</p>
        </div>

        <div className="card" style={{ background: "#f3f4f6", boxShadow: "none", marginTop: "16px" }}>
          <p><b>Total Orders:</b> {userOrders.length}</p>
          <p><b>Total Spent:</b> ${totalSpent.toFixed(2)}</p>
        </div>

      </div>
    </div>
  );
}
