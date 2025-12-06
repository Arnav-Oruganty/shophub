import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductCard from "../components/ProductCard";

describe("ProductCard", () => {
  it("renders product info and handles Add to Cart", () => {
    const product = {
      productId: 1,
      name: "Laptop",
      description: "High-performance laptop",
      price: 999.99,
      quantity: 10,
    };

    const handleAdd = vi.fn();

    render(<ProductCard product={product} onAdd={handleAdd} />);

    expect(screen.getByText("Laptop")).toBeInTheDocument();
    expect(screen.getByText("High-performance laptop")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Add to Cart"));
    expect(handleAdd).toHaveBeenCalledWith(product);
  });
});
