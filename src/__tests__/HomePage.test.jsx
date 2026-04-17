import { render, screen } from "@testing-library/react";
import HomePage from "../pages/HomePage";

describe("HomePage", () => {
  test("renders homepage content", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: /stack & shuffle/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /browse inventory in the shop, search for specific cards, and manage listings through the admin portal/i
      )
    ).toBeInTheDocument();
  });
});