import { render, screen } from "@testing-library/react";
import StoreBanner from "../components/StoreBanner";

describe("StoreBanner", () => {
  test("renders title and subtitle", () => {
    render(
      <StoreBanner
        title="Stack & Shuffle"
        subtitle="A trading card shop focused on singles for collectors and players."
      />
    );

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