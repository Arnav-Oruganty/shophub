import React, { useState } from "react";
import { CreditCard } from "lucide-react";
import { useShop } from "../context/ShopContext";

export default function CheckoutPage() {
  const { calculateTotal, placeOrder } = useShop();
  const total = calculateTotal().toFixed(2);

  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  const update = (field, value) => setAddress({ ...address, [field]: value });

  return (
    <div className="container" style={{ maxWidth: "600px" }}>
      <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "20px" }}>Checkout</h2>

      <div className="card">

        <input
          className="input"
          placeholder="Street Address"
          value={address.street}
          onChange={(e) => update("street", e.target.value)}
        />

        <div style={{ display: "flex", gap: "10px" }}>
          <input
            className="input"
            placeholder="City"
            value={address.city}
            onChange={(e) => update("city", e.target.value)}
          />
          <input
            className="input"
            placeholder="State"
            value={address.state}
            onChange={(e) => update("state", e.target.value)}
          />
        </div>

        <input
          className="input"
          placeholder="Pincode"
          value={address.pincode}
          onChange={(e) => update("pincode", e.target.value)}
        />

        <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", fontWeight: "700" }}>
          <span>Total</span>
          <span style={{ color: "#0d9488" }}>${total}</span>
        </div>

        <button className="btn-primary" style={{ marginTop: "20px" }} onClick={() => placeOrder(address)}>
          <CreditCard size={18} /> Place Order
        </button>

      </div>
    </div>
  );
}
