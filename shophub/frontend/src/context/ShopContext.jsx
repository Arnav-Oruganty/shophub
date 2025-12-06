import React, { createContext, useContext, useEffect, useState } from "react";
import { calculateTotal as calcUtil } from "../utils/calculateTotal";

const ShopContext = createContext();
export const useShop = () => useContext(ShopContext);

export function ShopProvider({ children }) {
  const [currentPage, setCurrentPage] = useState("login");

  const [users, setUsers] = useState([
    { userId: 1, username: "john_doe", email: "john@example.com", password: "password123" },
  ]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  // Fetch products on load
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((r) => r.json())
      .then(setProducts)
      .catch((e) => console.error("Error loading products", e));
  }, []);

  const fetchOrdersForUser = async (username) => {
    try {
      const res = await fetch(`http://localhost:3000/orders/${username}`);
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error("Error loading orders:", err);
    }
  };

  const handleLogin = (username, password) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setIsAuthenticated(true);
      setCurrentUser(user);
      setCurrentPage("home");
      fetchOrdersForUser(user.username);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleRegister = (username, email, password) => {
    if (!username || !email || !password) {
      alert("Please fill all fields");
      return;
    }
    const newUser = {
      userId: users.length + 1,
      username,
      email,
      password,
    };
    setUsers([...users, newUser]);
    alert("Registration successful! Please login.");
    setCurrentPage("login");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    setCart([]);
    setOrders([]);
    setCurrentPage("login");
  };

  const addToCart = (product) => {
    const existing = cart.find((i) => i.productId === product.productId);
    if (existing) {
      setCart(
        cart.map((i) =>
          i.productId === product.productId
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    alert("Added to cart!");
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((i) => i.productId !== productId));
  };

  const updateCartQuantity = (productId, qty) => {
    if (qty <= 0) {
      removeFromCart(productId);
    } else {
      setCart(
        cart.map((i) =>
          i.productId === productId ? { ...i, quantity: qty } : i
        )
      );
    }
  };

  const calculateTotal = () => calcUtil(cart);

  const placeOrder = async (address) => {
    if (!currentUser) {
      alert("Please login first");
      return;
    }
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    const payload = {
      username: currentUser.username,
      address,
      items: cart.map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
      })),
    };

    try {
      const res = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        alert("Failed to place order");
        return;
      }

      const newOrder = await res.json();
      setOrders([newOrder, ...orders]);
      setCart([]);
      alert("Order placed successfully!");
      setCurrentPage("orders");
    } catch (err) {
      console.error("Error placing order:", err);
      alert("Error placing order");
    }
  };

  const userOrders = currentUser
    ? orders.filter((o) => o.userId === currentUser.username)
    : [];

  const value = {
    currentPage,
    setCurrentPage,
    users,
    currentUser,
    isAuthenticated,
    products,
    cart,
    orders,
    userOrders,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    calculateTotal,
    handleLogin,
    handleRegister,
    handleLogout,
    placeOrder,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
