import { Routes, Route } from "react-router-dom";
import useCards from "./hooks/useCards"
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import AdminPortalPage from "./pages/AdminPortalPage";
import NavBar from "./components/NavBar";

function App() {
  const { cards, addCard, deleteCard, updateCard } = useCards();

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage cards={cards} />} />
        <Route 
          path="/admin" 
         element={
            <AdminPortalPage
              cards={cards} 
               addCard={addCard}
              deleteCard={deleteCard}
              updateCard={updateCard}
            />}
        />
      </Routes>
    </>
  );
}

export default App;