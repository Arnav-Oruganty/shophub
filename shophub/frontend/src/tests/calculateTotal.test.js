import { describe, test, expect } from "vitest";
import calculateTotal from "../utils/calculateTotal";

describe("calculateTotal utility", () => {
  test("returns 0 for an empty cart", () => {
    expect(calculateTotal([])).toBe(0);
  });

  test("calculates total correctly", () => {
    const cart = [
      { price: 10, quantity: 2 },
      { price: 5, quantity: 1 },
      { price: 3, quantity: 3 },
    ];
    expect(calculateTotal(cart)).toBe(34);
  });
});
