import { describe, it, expect } from "vitest";
import { calculateTotal } from "../utils/calculateTotal";

describe("calculateTotal", () => {
  it("returns 0 for empty cart", () => {
    expect(calculateTotal([])).toBe(0);
  });

  it("sums items correctly", () => {
    const cart = [
      { price: 100, quantity: 2 },
      { price: 50, quantity: 1 },
    ];
    expect(calculateTotal(cart)).toBe(250);
  });
});
