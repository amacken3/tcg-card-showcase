import EditCardForm from "./EditCardForm";

function CardItem({ card, onDelete, showDeleteButton = false, updateCard, showEditForm = false }) {
  return (
    <li>
      {card.name}
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