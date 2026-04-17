import CardItem from "./CardItem";

function CardInventoryList({ cards }) {
    return (
        <ul>
            {cards.map((card) => (
                <CardItem key={card.id} card={card} />
            ))}
        </ul>
    )
}

export default CardInventoryList;