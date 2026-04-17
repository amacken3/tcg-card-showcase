import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import CardItem from "../components/CardItem";

describe("CardItem", () => {
  const mockCard = {
    id: 1,
    name: "Blue-Eyes White Dragon",
    game: "Yu-Gi-Oh!",
    set: "Legend of Blue Eyes White Dragon",
    condition: "Near Mint",
    price: 24.99,
    stock: 3,
    image: "https://example.com/blue-eyes.jpg",
  };

  test("renders card details", () => {
    render(<CardItem card={mockCard} />);

    expect(screen.getByText(/blue-eyes white dragon/i)).toBeInTheDocument();
    expect(screen.getByText(/yu-gi-oh!/i)).toBeInTheDocument();
    expect(
      screen.getByText(/legend of blue eyes white dragon/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/near mint/i)).toBeInTheDocument();
    expect(screen.getByText(/\$24\.99/i)).toBeInTheDocument();
    expect(screen.getByText(/stock: 3/i)).toBeInTheDocument();
  });

  test("calls delete handler when delete button is clicked", async () => {
    const user = userEvent.setup();
    const mockDelete = vi.fn();

    render(
      <CardItem
        card={mockCard}
        onDelete={mockDelete}
        showDeleteButton={true}
      />
    );

    await user.click(screen.getByRole("button", { name: /delete/i }));

    expect(mockDelete).toHaveBeenCalledWith(mockCard.id);
  });
});