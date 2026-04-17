import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="price">Price</label>
      <input
        id="price"
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <label htmlFor="stock">Stock</label>
      <input
        id="stock"
        type="number"
        value={stock}
        onChange={(e) => setStock(Number(e.target.value))}
      />

      <button type="submit">Save Changes</button>
    </form>
  );
}

export default EditCardForm;