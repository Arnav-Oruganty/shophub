import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useShop } from "../context/ShopContext";

export default function RegisterPage() {
  const { handleRegister, setCurrentPage } = useShop();
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  return (
    <div className="container" style={{ maxWidth: "500px", paddingTop: "80px" }}>
      <div className="card">
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <ShoppingCart size={40} color="#0d9488" />
          <h2 style={{ marginTop: "10px", fontSize: "24px" }}>Register</h2>
        </div>

        <input
          className="input"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          className="input"
          placeholder="Email"
          value={form.email}
          type="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="input"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="btn-primary" onClick={() => handleRegister(form.username, form.email, form.password)}>
          Register
        </button>

        <p style={{ marginTop: "14px", textAlign: "center" }}>
          Already have an account?{" "}
          <span
            onClick={() => setCurrentPage("login")}
            style={{ color: "#0d9488", cursor: "pointer" }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
