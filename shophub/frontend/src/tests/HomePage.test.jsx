import { screen } from "@testing-library/react";
import { renderWithShop } from "./test-utils";
import HomePage from "../pages/HomePage";

test("renders list of products", () => {
  const products = [
    { productId: 1, name: "Laptop", description: "Fast", price: 1000, quantity: 5 },
    { productId: 2, name: "Phone", description: "Smart", price: 500, quantity: 8 },
  ];

  renderWithShop(<HomePage />, { providerProps: { products } });

  expect(screen.getByText("Laptop")).toBeInTheDocument();
  expect(screen.getByText("Phone")).toBeInTheDocument();
});
