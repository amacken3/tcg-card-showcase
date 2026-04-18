import AddCardForm from "../components/AddCardForm";
import CardInventoryList from "../components/CardInventoryList";
import styles from "./AdminPortalPage.module.css";

function AdminPortalPage({ cards, addCard, updateCard, deleteCard }) {
  return (
    <div>
      <h1>Admin Portal Page</h1>
      <p>Manage inventory for Stack & Shuffle.</p>
      <AddCardForm addCard={addCard} />
      <CardInventoryList
        cards={cards}
        onDelete={deleteCard}
        showDeleteButton={true}
        updateCard={updateCard}
        showEditForm={true}
      />
    </div>
  );
}

export default AdminPortalPage;