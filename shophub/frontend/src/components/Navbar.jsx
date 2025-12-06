import React from "react";
import { ShoppingCart, User, Package, LogOut, Home } from "lucide-react";
import { useShop } from "../context/ShopContext";

export default function Navbar() {
  const { currentUser, cart, setCurrentPage, handleLogout } = useShop();

  return (
    <div className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <ShoppingCart size={24} color="#0d9488" />
          <h2 style={{ fontSize: "22px", fontWeight: "700" }}>ShopHub</h2>
        </div>

        {/* Links */}
        <div className="nav-links">
          <div className="nav-item" onClick={() => setCurrentPage("home")}>
            <Home size={18} />
            <span>Products</span>
          </div>

          <div className="nav-item" onClick={() => setCurrentPage("cart")}>
            <ShoppingCart size={18} />
            <span>Cart ({cart.length})</span>
          </div>

          <div className="nav-item" onClick={() => setCurrentPage("orders")}>
            <Package size={18} />
            <span>Orders</span>
          </div>

          <div className="nav-item" onClick={() => setCurrentPage("profile")}>
            <User size={18} />
            <span>{currentUser.username}</span>
          </div>

          <div className="nav-item" onClick={handleLogout}>
            <LogOut size={18} />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
}
