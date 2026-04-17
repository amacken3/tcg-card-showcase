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
        /a trading card shop focused on singles for collectors and players/i
      )
    ).toBeInTheDocument();
  });
});