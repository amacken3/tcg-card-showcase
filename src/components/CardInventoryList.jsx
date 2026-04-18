import CardItem from "./CardItem";
import styles from "./CardInventoryList.module.css";

function CardInventoryList({ cards = [], onDelete, showDeleteButton = false, updateCard, showEditForm = false }) {
    return (
        <ul className={styles.list}>
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
    );
}

export default CardInventoryList;