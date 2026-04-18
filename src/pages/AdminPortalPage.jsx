import AddCardForm from "../components/AddCardForm";
import CardInventoryList from "../components/CardInventoryList";
import styles from "./AdminPortalPage.module.css";

function AdminPortalPage({ cards, addCard, updateCard, deleteCard }) {
  return (
    <div className={styles.page}>
      <div className={styles.formSection}>
        <AddCardForm addCard={addCard} />
      </div>

      <div className={styles.listSection}>
        <CardInventoryList
          cards={cards}
          onDelete={deleteCard}
          showDeleteButton={true}
          updateCard={updateCard}
          showEditForm={true}
        />
      </div>
    </div>
  );
}


export default AdminPortalPage;