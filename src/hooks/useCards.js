import { useEffect, useState } from "react";

function useCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/cards")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  function addCard(newCard) {
    fetch("http://localhost:3001/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCard),
    })
      .then((response) => response.json())
      .then((createdCard) => setCards([...cards, createdCard]));
  }

  function deleteCard(id) {
    fetch(`http://localhost:3001/cards/${id}`, {
      method: "DELETE",
    }).then(() => {
      setCards((currentCards) =>
        currentCards.filter((card) => card.id !== id)
      );
    });
  }

  function updateCard(id, updatedFields) {
    fetch(`http://localhost:3001/cards/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedFields),
    })
      .then((response) => response.json())
      .then((updatedCard) => {
        setCards((currentCards) =>
          currentCards.map((card) =>
            card.id === id ? updatedCard : card
          )
        );
      });
  }

  return { cards, addCard};
}

export default useCards;