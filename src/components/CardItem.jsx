import EditCardForm from "./EditCardForm";

function CardItem({ card, onDelete, showDeleteButton = false, updateCard, showEditForm = false }) {
  return (
    <li>
      <h3>{card.name}</h3>
      <p>Game: {card.game}</p>
      <p>Set: {card.set}</p>
      <p>Condition: {card.condition}</p>
      <p>Price: ${card.price}</p>
      <p>Stock: {card.stock}</p>
      {card.image && <img src={card.image} alt={card.name} width="150" />}

      {showDeleteButton && (
        <button onClick={() => onDelete(card.id)}>Delete</button>
      )}

      {showEditForm && (
        <EditCardForm card={card} updateCard={updateCard} />
      )}
    </li>
  );
}

export default CardItem;