import { useEffect, useState } from "react";

function useCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/cards")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  return cards;
}

export default useCards;