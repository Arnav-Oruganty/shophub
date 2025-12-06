import { screen } from "@testing-library/react";
import { renderWithShop } from "./test-utils";
import CartPage from "../pages/CartPage";

test("shows empty cart message", () => {
  renderWithShop(<CartPage />, { providerProps: { cart: [] } });

  expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
});

test("renders items in cart", () => {
  const cart = [
    { productId: 1, name: "Laptop", price: 1000, quantity: 2 },
  ];

  renderWithShop(<CartPage />, { providerProps: { cart, calculateTotal: () => 2000 } });

  expect(screen.getByText("Laptop")).toBeInTheDocument();
  expect(screen.getByText("$1000")).toBeInTheDocument();
});
