import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import CardInventoryList from "../components/CardInventoryList"

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
      <CardInventoryList cards={filteredCards} />
    </div>
  );
}

export default ShopPage;