import React from "react";
import { render } from "@testing-library/react";
import { ShopContext } from "../context/ShopContext";

export function renderWithShop(
  ui,
  { providerProps = {}, ...renderOptions } = {}
) {
  const defaultProps = {
    currentPage: "home",
    setCurrentPage: () => {},
    products: [],
    cart: [],
    addToCart: () => {},
    updateCartQuantity: () => {},
    removeFromCart: () => {},
    calculateTotal: () => 0,
    currentUser: { username: "john_doe", email: "john@example.com" },
    userOrders: [],
    placeOrder: () => {},
    handleLogin: () => {},
    handleRegister: () => {},
  };

  return render(
    <ShopContext.Provider value={{ ...defaultProps, ...providerProps }}>
      {ui}
    </ShopContext.Provider>,
    renderOptions
  );
}
