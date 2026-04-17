import CardItem from "./CardItem";

function CardInventoryList(props) {
    const cards = props.cards || []

    return (
        <ul>
            {cards.map((card) => (
                <CardItem key={card.id} card={card} />
            ))}
        </ul>
    )
}

export default CardInventoryList;