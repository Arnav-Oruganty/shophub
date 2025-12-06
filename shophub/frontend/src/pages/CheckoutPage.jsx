
import React, { useState } from "react";
import { CreditCard } from "lucide-react";
import { useShop } from "../context/ShopContext";
import { CardPayment, UpiPayment, CashOnDelivery } from "../patterns/paymentStrategies";

export default function CheckoutPage() {
  const { calculateTotal, placeOrder } = useShop();
  const total = calculateTotal().toFixed(2);

  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  // Payment strategy pattern
  const paymentOptions = [
    { label: "Card", value: "card", strategy: new CardPayment() },
    { label: "UPI", value: "upi", strategy: new UpiPayment() },
    { label: "Cash on Delivery", value: "cod", strategy: new CashOnDelivery() },
  ];
  const [selectedPayment, setSelectedPayment] = useState(paymentOptions[0].strategy);
  const [cardDetails, setCardDetails] = useState({ number: "", expiry: "", cvv: "" });
  const [upiPhone, setUpiPhone] = useState("");

  const update = (field, value) => setAddress({ ...address, [field]: value });

  const handlePaymentChange = (e) => {
    const selected = paymentOptions.find(opt => opt.value === e.target.value);
    setSelectedPayment(selected.strategy);
    // Reset payment details when switching
    setCardDetails({ number: "", expiry: "", cvv: "" });
    setUpiPhone("");
  };

  const handleCheckout = () => {
    // Collect payment details based on selected strategy
    let paymentInfo = { address, total };
    if (selectedPayment instanceof CardPayment) {
      paymentInfo = { ...paymentInfo, ...cardDetails };
    } else if (selectedPayment instanceof UpiPayment) {
      paymentInfo = { ...paymentInfo, upiPhone };
    }
    // CashOnDelivery does not need extra info
    selectedPayment.pay(paymentInfo);
    placeOrder(address);
  };

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

        {/* Payment method selection UI */}
        <div style={{ margin: "20px 0" }}>
          <label style={{ fontWeight: 600 }}>Payment Method:</label>
          <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
            {paymentOptions.map(opt => (
              <label key={opt.value} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <input
                  type="radio"
                  name="payment"
                  value={opt.value}
                  checked={selectedPayment instanceof opt.strategy.constructor}
                  onChange={handlePaymentChange}
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        {/* Conditional payment details UI */}
        {selectedPayment instanceof CardPayment && (
          <div style={{ marginBottom: "20px" }}>
            <input
              className="input"
              placeholder="Card Number"
              value={cardDetails.number}
              onChange={e => setCardDetails({ ...cardDetails, number: e.target.value })}
              maxLength={16}
              style={{ marginBottom: "10px" }}
            />
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                className="input"
                placeholder="Expiry (MM/YY)"
                value={cardDetails.expiry}
                onChange={e => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                maxLength={5}
              />
              <input
                className="input"
                placeholder="CVV"
                value={cardDetails.cvv}
                onChange={e => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                maxLength={4}
                type="password"
              />
            </div>
          </div>
        )}
        {selectedPayment instanceof UpiPayment && (
          <div style={{ marginBottom: "20px" }}>
            <input
              className="input"
              placeholder="UPI Phone Number"
              value={upiPhone}
              onChange={e => setUpiPhone(e.target.value)}
              maxLength={10}
            />
          </div>
        )}
        {selectedPayment instanceof CashOnDelivery && (
          <div style={{ marginBottom: "20px", color: "#0d9488", fontWeight: 600 }}>
            Cash on Delivery selected. Pay when you receive your order.
          </div>
        )}

        <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", fontWeight: "700" }}>
          <span>Total</span>
          <span style={{ color: "#0d9488" }}>${total}</span>
        </div>

        <button className="btn-primary" style={{ marginTop: "20px" }} onClick={handleCheckout}>
          <CreditCard size={18} /> Place Order
        </button>

      </div>
    </div>
  );
}
