import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import AdminPortalPage from "../pages/AdminPortalPage";
import CardsContext from "../context/CardsContext";

describe("AdminPortalPage", () => {
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

  const mockContextValue = {
    cards: mockCards,
    addCard: vi.fn(),
    updateCard: vi.fn(),
    deleteCard: vi.fn(),
  };

  test("renders add card form on admin page", () => {
    render(
      <CardsContext.Provider value={mockContextValue}>
        <AdminPortalPage />
      </CardsContext.Provider>
    );

    expect(screen.getByRole("button", { name: /add card/i })).toBeInTheDocument();
  });

  test("renders cards on the admin page", () => {
    render(
      <CardsContext.Provider value={mockContextValue}>
        <AdminPortalPage />
      </CardsContext.Provider>
    );

    expect(screen.getByText(/blue-eyes white dragon/i)).toBeInTheDocument();
    expect(screen.getByText(/charizard/i)).toBeInTheDocument();
  });
});