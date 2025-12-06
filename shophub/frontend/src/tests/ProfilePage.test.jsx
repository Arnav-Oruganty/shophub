import { renderWithShop } from "./test-utils";
import { screen } from "@testing-library/react";
import ProfilePage from "../pages/ProfilePage";

test("shows username and email", () => {
  renderWithShop(<ProfilePage />, {
    providerProps: {
      currentUser: { username: "john", email: "john@x.com", userId: 1 },
      userOrders: []
    }
  });

  expect(screen.getByText("john")).toBeInTheDocument();

  const emails = screen.getAllByText("john@x.com");
  expect(emails.length).toBeGreaterThan(0);
});
