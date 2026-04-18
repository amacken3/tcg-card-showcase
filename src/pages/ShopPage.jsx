import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import CardInventoryList from "../components/CardInventoryList";
import styles from "./ShopPage.module.css";

function ShopPage(props) {
  const cards = props.cards || [];
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        <div className={styles.sidebar}>
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className={styles.mainContent}>
          <CardInventoryList cards={filteredCards} />
        </div>
      </div>
    </div>
  );
}

export default ShopPage;