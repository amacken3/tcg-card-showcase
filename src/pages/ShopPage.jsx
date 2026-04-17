import React, { useState } from "react";
import SearchBar from "../components/SearchBar";

function ShopPage(props) {
  const cards = props.cards || [];
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Shop Page</h1>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
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