import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import SearchBar from "../components/SearchBar";

describe("SearchBar", () => {
  test("renders search input", () => {
    render(<SearchBar searchTerm="" onSearchChange={() => {}} />);

    expect(
      screen.getByRole("textbox", { name: /search cards/i })
    ).toBeInTheDocument();
  });

  test("calls onSearchChange when typing", async () => {
    const user = userEvent.setup();
    const mockChange = vi.fn();

    render(<SearchBar searchTerm="" onSearchChange={mockChange} />);

    const input = screen.getByRole("textbox", { name: /search cards/i });
    await user.type(input, "char");

    expect(mockChange).toHaveBeenCalled();
  });
});