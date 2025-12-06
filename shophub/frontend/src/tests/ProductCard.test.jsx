import { screen } from "@testing-library/react";
import { renderWithShop } from "./test-utils";
import ProductCard from "../components/ProductCard";

test("renders product info and Add button", () => {
  const product = {
    productId: 1,
    name: "Laptop",
    description: "Fast",
    price: 1000,
    quantity: 10,
  };

  renderWithShop(<ProductCard product={product} onAdd={() => {}} />);

  expect(screen.getByText("Laptop")).toBeInTheDocument();
  expect(screen.getByText("Fast")).toBeInTheDocument();
  expect(screen.getByText("$1000")).toBeInTheDocument();
  expect(screen.getByText("Add to Cart")).toBeInTheDocument();
});
