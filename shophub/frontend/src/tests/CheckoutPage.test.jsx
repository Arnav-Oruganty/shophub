import { renderWithShop } from "./test-utils";
import { screen } from "@testing-library/react";
import CheckoutPage from "../pages/CheckoutPage";

test("renders checkout form", () => {
  renderWithShop(<CheckoutPage />, {
    providerProps: { 
        cart: [{ price: 100, quantity: 1 }],
        calculateTotal: () => 100 
    }
    });


  expect(screen.getByText("Checkout")).toBeInTheDocument();
  expect(screen.getByText("$100.00")).toBeInTheDocument();
});
