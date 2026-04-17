import { render, screen } from "@testing-library/react";
import AdminPortalPage from "../pages/AdminPortalPage";

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

  test("renders admin portal heading", () => {
    render(<AdminPortalPage cards={mockCards} />);

    expect(
      screen.getByRole("heading", { name: /admin portal page/i })
    ).toBeInTheDocument();
  });

  test("renders cards on the admin page", () => {
    render(<AdminPortalPage cards={mockCards} />);

    expect(screen.getByText(/blue-eyes white dragon/i)).toBeInTheDocument();
    expect(screen.getByText(/charizard/i)).toBeInTheDocument();
  });
});