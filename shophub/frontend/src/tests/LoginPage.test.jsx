import { renderWithShop } from "./test-utils";
import { screen, fireEvent } from "@testing-library/react";
import LoginPage from "../pages/LoginPage";

test("shows login form", () => {
  renderWithShop(<LoginPage />);

  expect(screen.getByRole("heading", { name: "Login" })).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
});

test("calls handleLogin when button clicked", () => {
  const mockLogin = vi.fn();

  renderWithShop(<LoginPage />, {
    providerProps: { handleLogin: mockLogin }
  });

  fireEvent.change(screen.getByPlaceholderText("Username"), {
    target: { value: "john_doe" },
  });
  fireEvent.change(screen.getByPlaceholderText("Password"), {
    target: { value: "password123" },
  });

  // Use button role instead of ambiguous getByText("Login")
  fireEvent.click(screen.getByRole("button", { name: "Login" }));

  expect(mockLogin).toHaveBeenCalled();
});
