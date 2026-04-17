import React, { useState } from "react";

function AddCardForm() {
  const [formData, setFormData] = useState({
    name: "",
    game: "",
    set: "",
    condition: "",
    price: "",
    stock: 0,
    image: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "stock" ? Number(value) : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("New card submitted:", formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Card Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="game">Game</label>
      <input
        id="game"
        name="game"
        type="text"
        value={formData.game}
        onChange={handleChange}
      />

      <label htmlFor="set">Set</label>
      <input
        id="set"
        name="set"
        type="text"
        value={formData.set}
        onChange={handleChange}
      />

      <label htmlFor="condition">Condition</label>
      <input
        id="condition"
        name="condition"
        type="text"
        value={formData.condition}
        onChange={handleChange}
      />

      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="text"
        value={formData.price}
        onChange={handleChange}
      />

      <label htmlFor="stock">Stock</label>
      <input
        id="stock"
        name="stock"
        type="number"
        value={formData.stock}
        onChange={handleChange}
      />

      <label htmlFor="image">Image URL</label>
      <input
        id="image"
        name="image"
        type="text"
        value={formData.image}
        onChange={handleChange}
      />

      <button type="submit">Add Card</button>
    </form>
  );
}

export default AddCardForm;