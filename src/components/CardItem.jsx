function CardItem({ card, onDelete, showDeleteButton = false }) {
  return (
    <li>
      {card.name}
      {showDeleteButton && (
        <button onClick={() => onDelete(card.id)}>Delete</button>
      )}
    </li>
  );
}

export default CardItem;