import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react"
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import AdminPortalPage from "./pages/AdminPortalPage";

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/cards")
      .then((response) => response.json())
      .then((data) => setCards(data))
  }, [])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage cards={cards} />} />
      <Route path="/admin" element={<AdminPortalPage />} />
    </Routes>
  );
}

export default App;