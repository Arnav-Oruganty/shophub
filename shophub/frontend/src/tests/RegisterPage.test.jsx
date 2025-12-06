import { renderWithShop } from "./test-utils";
import { screen, fireEvent } from "@testing-library/react";
import RegisterPage from "../pages/RegisterPage";

test("renders register page", () => {
  renderWithShop(<RegisterPage />);
  expect(screen.getByRole("heading", { name: "Register" })).toBeInTheDocument();
});

test("register button calls handleRegister", () => {
  const fn = vi.fn();

  renderWithShop(<RegisterPage />, {
    providerProps: { handleRegister: fn }
  });

  fireEvent.change(screen.getByPlaceholderText("Username"), {
    target: { value: "newuser" },
  });
  fireEvent.change(screen.getByPlaceholderText("Email"), {
    target: { value: "new@test.com" },
  });
  fireEvent.change(screen.getByPlaceholderText("Password"), {
    target: { value: "12345" },
  });

  fireEvent.click(screen.getByRole("button", { name: "Register" }));

  expect(fn).toHaveBeenCalled();
});
