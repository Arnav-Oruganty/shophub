import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useShop } from "../context/ShopContext";

export default function LoginPage() {
  const { handleLogin, setCurrentPage } = useShop();
  const [form, setForm] = useState({ username: "", password: "" });

  return (
    <div className="container" style={{ maxWidth: "500px", paddingTop: "80px" }}>
      <div className="card">
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <ShoppingCart size={40} color="#0d9488" />
          <h2 style={{ marginTop: "10px", fontSize: "24px" }}>Login</h2>
        </div>

        <input
          className="input"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          className="input"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button onClick={() => handleLogin(form.username, form.password)} className="btn-primary">
          Login
        </button>

        <p style={{ marginTop: "14px", textAlign: "center" }}>
          Don't have an account?{" "}
          <span
            onClick={() => setCurrentPage("register")}
            style={{ color: "#0d9488", cursor: "pointer" }}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
