import { render, screen } from "@testing-library/react";
import CardInventoryList from "../components/CardInventoryList";

describe("CardInventoryList", () => {
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

  test("renders all cards in the list", () => {
    render(<CardInventoryList cards={mockCards} />);

    expect(screen.getByText(/blue-eyes white dragon/i)).toBeInTheDocument();
    expect(screen.getByText(/charizard/i)).toBeInTheDocument();
  });
});