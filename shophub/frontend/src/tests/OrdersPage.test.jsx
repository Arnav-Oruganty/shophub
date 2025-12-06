import { renderWithShop } from "./test-utils";
import { screen } from "@testing-library/react";
import OrdersPage from "../pages/OrdersPage";

test("shows no orders message", () => {
  renderWithShop(<OrdersPage />, {
    providerProps: { userOrders: [] }
  });

  expect(screen.getByText("You have no orders")).toBeInTheDocument();
});
