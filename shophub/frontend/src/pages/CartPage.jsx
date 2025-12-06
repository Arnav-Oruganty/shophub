import React from "react";
import { ShoppingCart } from "lucide-react";
import { useShop } from "../context/ShopContext";
import CartItem from "../components/CartItem";

export default function CartPage() {
  const { cart, calculateTotal, updateCartQuantity, removeFromCart, setCurrentPage } = useShop();
  const total = calculateTotal().toFixed(2);

  return (
    <div className="container">

      <h2 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "20px" }}>
        Your Cart
      </h2>

      {cart.length === 0 ? (
        <div className="card" style={{ textAlign: "center" }}>
          <ShoppingCart size={50} color="#9ca3af" />
          <p style={{ marginTop: "10px" }}>Your cart is empty</p>

          <button className="btn-primary" style={{ marginTop: "20px" }} onClick={() => setCurrentPage("home")}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "20px" }}>

          <div>
            {cart.map((item) => (
              <CartItem
                key={item.productId}
                item={item}
                onDecrease={() => updateCartQuantity(item.productId, item.quantity - 1)}
                onIncrease={() => updateCartQuantity(item.productId, item.quantity + 1)}
                onRemove={() => removeFromCart(item.productId)}
              />
            ))}
          </div>

          <div className="card">
            <h3 style={{ fontSize: "20px", marginBottom: "12px" }}>Order Summary</h3>

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
              <span>Subtotal</span>
              <span>${total}</span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <hr />

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "12px", fontWeight: "700" }}>
              <span>Total</span>
              <span style={{ color: "#0d9488" }}>${total}</span>
            </div>

            <button className="btn-primary" style={{ marginTop: "20px" }} onClick={() => setCurrentPage("checkout")}>
              Proceed to Checkout
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
