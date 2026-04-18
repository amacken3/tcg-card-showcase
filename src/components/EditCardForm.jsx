import React, { useState } from "react";
import styles from "./EditCardForm.module.css";

function EditCardForm({ card, updateCard }) {
  const [price, setPrice] = useState(String(card.price));
  const [stock, setStock] = useState(card.stock);

  function handleSubmit(e) {
    e.preventDefault();

    updateCard(card.id, {
      price,
      stock,
    });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor={`price-${card.id}`}>Price</label>
      <input
        className={styles.input}
        id={`price-${card.id}`}
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <label className={styles.label} htmlFor={`stock-${card.id}`}>Stock</label>
      <input
        className={styles.input}
        id={`stock-${card.id}`}
        type="number"
        value={stock}
        onChange={(e) => setStock(Number(e.target.value))}
      />

      <button className={styles.button} type="submit">Save Changes</button>
    </form>
  );
}

export default EditCardForm;