function CardInventoryList(props) {
    const cards = props.cards || []

    return (
        <ul>
            {cards.map((card) => (
                <li key={card.id}>{card.name}</li>
            ))}
        </ul>
    )
}

export default CardInventoryList;