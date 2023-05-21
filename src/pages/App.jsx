import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Recipes from "./Recipes";
import ShoppingList from "./ShoppingList";
import "../../src/index.css";

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
