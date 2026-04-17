function CardItem(props) {
    const card = props.card

    return (
        <li>{card.name}</li>
    )
}

export default CardItem;