import React, { useState } from "react";

function ShopPage(props) {
  const cards = props.cards || [];
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Shop Page</h1>
      <label htmlFor="search">Search Cards</label>
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredCards.map((card) => (
          <li key={card.id}>{card.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShopPage;