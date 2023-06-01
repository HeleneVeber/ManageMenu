import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Recipes from './pages/Recipes';
import ShoppingList from './pages/ShoppingList';
import getRecipes from './api/getRecipes';
import './index.css';

export default function App() {
  const [recipesData, setRecipesData] = useState([
    {
      id: '',
      recipe: '',
      checked: false,
      ingredients: []
    }
  ]);

  const getRecipesLoad = async () => {
    const data = await getRecipes();
    const recipes = data.map((e, i) => {
      return {
        id: i,
        recipe: e.recipe.label,
        checked: false,
        ingredients: e.recipe.ingredientLines
      };
    });
    setRecipesData(recipes);
  };
  useEffect(() => {
    getRecipesLoad();
  }, []);

  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route
            path="/recipes"
            element={<Recipes recipes={recipesData} setRecipes={setRecipesData} />}
          />
          <Route path="/ShoppingList" element={<ShoppingList recipes={recipesData} />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}
