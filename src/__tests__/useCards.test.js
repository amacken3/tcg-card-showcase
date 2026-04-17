import { renderHook, waitFor, act } from "@testing-library/react";
import { vi, beforeEach, afterEach, describe, test, expect } from "vitest";
import useCards from "../hooks/useCards";

describe("useCards", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("fetches cards on mount", async () => {
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

    fetch.mockResolvedValueOnce({
      json: vi.fn().mockResolvedValue(mockCards),
    });

    const { result } = renderHook(() => useCards());

    await waitFor(() => {
      expect(result.current.cards).toEqual(mockCards);
    });

    expect(fetch).toHaveBeenCalledWith("http://localhost:3001/cards");
  });

  test("adds a card", async () => {
    const initialCards = [
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
    ];

    const newCard = {
      name: "Dark Magician",
      game: "Yu-Gi-Oh!",
      set: "Legend of Blue Eyes White Dragon",
      condition: "Near Mint",
      price: "19.99",
      stock: 2,
      image: "https://example.com/dark-magician.jpg",
    };

    const createdCard = {
      id: 2,
      ...newCard,
    };

    fetch
      .mockResolvedValueOnce({
        json: vi.fn().mockResolvedValue(initialCards),
      })
      .mockResolvedValueOnce({
        json: vi.fn().mockResolvedValue(createdCard),
      });

    const { result } = renderHook(() => useCards());

    await waitFor(() => {
      expect(result.current.cards).toEqual(initialCards);
    });

    await act(async () => {
      result.current.addCard(newCard);
    });

    await waitFor(() => {
      expect(result.current.cards).toEqual([...initialCards, createdCard]);
    });
  });

  test("deletes a card", async () => {
    const initialCards = [
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

    fetch
      .mockResolvedValueOnce({
        json: vi.fn().mockResolvedValue(initialCards),
      })
      .mockResolvedValueOnce({});

    const { result } = renderHook(() => useCards());

    await waitFor(() => {
      expect(result.current.cards).toEqual(initialCards);
    });

    await act(async () => {
      result.current.deleteCard(2);
    });

    await waitFor(() => {
      expect(result.current.cards).toEqual([initialCards[0]]);
    });
  });

  test("updates a card", async () => {
    const initialCards = [
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
    ];

    const updatedCard = {
      ...initialCards[0],
      price: "29.99",
      stock: 5,
    };

    fetch
      .mockResolvedValueOnce({
        json: vi.fn().mockResolvedValue(initialCards),
      })
      .mockResolvedValueOnce({
        json: vi.fn().mockResolvedValue(updatedCard),
      });

    const { result } = renderHook(() => useCards());

    await waitFor(() => {
      expect(result.current.cards).toEqual(initialCards);
    });

    await act(async () => {
      result.current.updateCard(1, { price: "29.99", stock: 5 });
    });

    await waitFor(() => {
      expect(result.current.cards).toEqual([updatedCard]);
    });
  });
});