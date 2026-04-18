import React, { useId, useRef, useState } from "react";
import styles from "./AddCardForm.module.css";

function AddCardForm({ addCard }) {
  const [formData, setFormData] = useState({
    name: "",
    game: "",
    set: "",
    condition: "",
    price: "",
    stock: 0,
    image: "",
  });

  const nameInputRef = useRef(null);

  const nameId = useId();
  const gameId = useId();
  const setId = useId();
  const conditionId = useId();
  const priceId = useId();
  const stockId = useId();
  const imageId = useId();

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "stock" ? Number(value) : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    addCard(formData);

    setFormData({
      name: "",
      game: "",
      set: "",
      condition: "",
      price: "",
      stock: 0,
      image: "",
    });

    nameInputRef.current?.focus();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor={nameId}>Card Name</label>
      <input
        ref={nameInputRef}
        className={styles.input}
        id={nameId}
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
      />

      <label className={styles.label} htmlFor={gameId}>Game</label>
      <input
        className={styles.input}
        id={gameId}
        name="game"
        type="text"
        value={formData.game}
        onChange={handleChange}
      />

      <label className={styles.label} htmlFor={setId}>Set</label>
      <input
        className={styles.input}
        id={setId}
        name="set"
        type="text"
        value={formData.set}
        onChange={handleChange}
      />

      <label className={styles.label} htmlFor={conditionId}>Condition</label>
      <input
        className={styles.input}
        id={conditionId}
        name="condition"
        type="text"
        value={formData.condition}
        onChange={handleChange}
      />

      <label className={styles.label} htmlFor={priceId}>Price</label>
      <input
        className={styles.input}
        id={priceId}
        name="price"
        type="text"
        value={formData.price}
        onChange={handleChange}
      />

      <label className={styles.label} htmlFor={stockId}>Stock</label>
      <input
        className={styles.input}
        id={stockId}
        name="stock"
        type="number"
        value={formData.stock}
        onChange={handleChange}
      />

      <label className={styles.label} htmlFor={imageId}>Image URL</label>
      <input
        className={styles.input}
        id={imageId}
        name="image"
        type="text"
        value={formData.image}
        onChange={handleChange}
      />

      <button className={styles.button} type="submit">Add Card</button>
    </form>
  );
}

export default AddCardForm;