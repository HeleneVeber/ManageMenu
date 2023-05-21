import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Recipes from "./pages/Recipes";
import ShoppingList from "./pages/ShoppingList";
import "./index.css";

export default function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/ShoppingList" element={<ShoppingList />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}
