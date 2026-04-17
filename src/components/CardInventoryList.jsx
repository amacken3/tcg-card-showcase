import CardItem from "./CardItem";

function CardInventoryList({ cards = [], onDelete, showDeleteButton = false, updateCard, showEditForm = false }) {
    return (
        <ul>
            {cards.map((card) => (
                <CardItem 
                    key={card.id} 
                    card={card} 
                    onDelete={onDelete}
                    showDeleteButton={showDeleteButton}
                    updateCard={updateCard}
                    showEditForm={showEditForm}
                />
            ))}
        </ul>
    )
}

export default CardInventoryList;