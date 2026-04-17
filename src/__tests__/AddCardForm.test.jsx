import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddCardForm from "../components/AddCardForm";

describe("AddCardForm", () => {
  test("renders form inputs and allows typing", async () => {
    const user = userEvent.setup();

    render(<AddCardForm />);

    const nameInput = screen.getByLabelText(/card name/i);
    const gameInput = screen.getByLabelText(/game/i);
    const setInput = screen.getByLabelText(/set/i);
    const conditionInput = screen.getByLabelText(/condition/i);
    const priceInput = screen.getByLabelText(/price/i);
    const stockInput = screen.getByLabelText(/stock/i);
    const imageInput = screen.getByLabelText(/image url/i);

    await user.type(nameInput, "Dark Magician");
    await user.type(gameInput, "Yu-Gi-Oh!");
    await user.type(setInput, "Legend of Blue Eyes White Dragon");
    await user.type(conditionInput, "Near Mint");
    await user.type(priceInput, "19.99");
    await user.type(stockInput, "2");
    await user.type(imageInput, "https://example.com/dark-magician.jpg");

    expect(nameInput).toHaveValue("Dark Magician");
    expect(gameInput).toHaveValue("Yu-Gi-Oh!");
    expect(setInput).toHaveValue("Legend of Blue Eyes White Dragon");
    expect(conditionInput).toHaveValue("Near Mint");
    expect(priceInput).toHaveValue("19.99");
    expect(stockInput).toHaveValue(2);
    expect(imageInput).toHaveValue("https://example.com/dark-magician.jpg");
  });
});