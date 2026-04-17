import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShopPage from "../pages/ShopPage";

describe("ShopPage", () => {
  const mockCards = [
    {
      id: 1,
      name: "Blue-Eyes White Dragon",
      game: "Yu-Gi-Oh!",
      set: "Legend of Blue Eyes White Dragon",
      condition: "Near Mint",
      price: 24.99,
      stock: 3,
      image: "https://example.com/blue-eyes.jpg",
    },
    {
      id: 2,
      name: "Charizard",
      game: "Pokémon",
      set: "Base Set",
      condition: "Lightly Played",
      price: 199.99,
      stock: 1,
      image: "https://example.com/charizard.jpg",
    },
  ];

  test("renders all cards on the page", () => {
    render(<ShopPage cards={mockCards} />);

    expect(screen.getByText(/blue-eyes white dragon/i)).toBeInTheDocument();
    expect(screen.getByText(/charizard/i)).toBeInTheDocument();
  });

  test("filters cards by search input", async () => {
    const user = userEvent.setup();

    render(<ShopPage cards={mockCards} />);

    const searchInput = screen.getByRole("textbox", { name: /search cards/i });
    await user.type(searchInput, "char");

    expect(screen.getByText(/charizard/i)).toBeInTheDocument();
    expect(screen.queryByText(/blue-eyes white dragon/i)).not.toBeInTheDocument();
  });
});