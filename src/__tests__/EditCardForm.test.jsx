import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import EditCardForm from "../components/EditCardForm";

describe("EditCardForm", () => {
  test("allows editing price and stock and submits updated values", async () => {
    const user = userEvent.setup();
    const mockUpdateCard = vi.fn();

    const card = {
      id: 1,
      name: "Blue-Eyes White Dragon",
      game: "Yu-Gi-Oh!",
      set: "Legend of Blue Eyes White Dragon",
      condition: "Near Mint",
      price: 24.99,
      stock: 3,
      image: "https://example.com/blue-eyes.jpg",
    };

    render(<EditCardForm card={card} updateCard={mockUpdateCard} />);

    const priceInput = screen.getByLabelText(/price/i);
    const stockInput = screen.getByLabelText(/stock/i);
    const submitButton = screen.getByRole("button", { name: /save changes/i });

    await user.clear(priceInput);
    await user.type(priceInput, "29.99");

    await user.clear(stockInput);
    await user.type(stockInput, "5");

    await user.click(submitButton);

    expect(mockUpdateCard).toHaveBeenCalledWith(card.id, {
      price: "29.99",
      stock: 5,
    });
  });
});