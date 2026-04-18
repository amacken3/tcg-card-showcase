import { Routes, Route } from "react-router-dom";
import useCards from "./hooks/useCards";
import CardsContext from "./context/CardsContext";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import AdminPortalPage from "./pages/AdminPortalPage";
import NavBar from "./components/NavBar";

function App() {
  const { cards, addCard, deleteCard, updateCard } = useCards();

  return (
    <CardsContext.Provider
      value={{ cards, addCard, deleteCard, updateCard }}
    >
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/admin" element={<AdminPortalPage />}
        />
      </Routes>
    </CardsContext.Provider>
  );
}

export default App;