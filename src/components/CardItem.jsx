import EditCardForm from "./EditCardForm";
import styles from "./CardItem.module.css";

function CardItem({ card, onDelete, showDeleteButton = false, updateCard, showEditForm = false }) {
  return (
    <li className={styles.card}>
      <h3 className={styles.title}>{card.name}</h3>
      <p className={styles.detail}>Game: {card.game}</p>
      <p className={styles.detail}>Set: {card.set}</p>
      <p className={styles.detail}>Condition: {card.condition}</p>
      <p className={styles.detail}>Price: ${card.price}</p>
      <p className={styles.detail}>Stock: {card.stock}</p>
      {card.image && <img src={card.image} alt={card.name} className={styles.image} />}

      <div className={styles.actions}>
        {showDeleteButton && (
          <button className={styles.deleteButton} onClick={() => onDelete(card.id)}>
            Delete
          </button>
        )}

        {showEditForm && <EditCardForm card={card} updateCard={updateCard} />}
      </div>
    </li>
  );
}

export default CardItem;