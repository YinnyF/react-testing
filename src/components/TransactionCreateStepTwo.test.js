import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test("on initial render, the pay button is disabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "1" }} receiver={{ id: "1" }} />);

  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});

test("if an amount and note is entered, the pay button becomes enabled", async () => {
  // Arrange
  render(<TransactionCreateStepTwo sender={{ id: "1" }} receiver={{ id: "1" }} />);

  // Act
  // mimic the user actions using userEvent
  // target the correct element - consider the testing library priority queries
  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

  // Assert
  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
