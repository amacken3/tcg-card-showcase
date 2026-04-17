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

  return { cards, addCard};
}

export default useCards;