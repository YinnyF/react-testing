import { render, screen, waitFor } from "@testing-library/react";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test("on initial render, the pay button is disabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "1" }} receiver={{ id: "1" }}/>);

  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});
