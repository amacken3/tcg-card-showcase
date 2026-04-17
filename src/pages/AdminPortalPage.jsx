import AddCardForm from "../components/AddCardForm";
import CardInventoryList from "../components/CardInventoryList";

function AdminPortalPage(props) {
  const cards = props.cards || [];

  return (
    <div>
      <h1>Admin Portal Page</h1>
      <p>Manage inventory for Stack & Shuffle.</p>
      <AddCardForm />
      <CardInventoryList cards={cards} />
    </div>
  );
}

export default AdminPortalPage;