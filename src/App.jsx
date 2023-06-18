import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header/Header';
import Recipes from './pages/Recipes';
import ShoppingList from './pages/ShoppingList';
import getRecipes from './api/getRecipes';

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
        recipe: e.name,
        checked: false,
        ingredients: e.ingredients
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
        <GlobalStyle />
        <Header />
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

const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

:root {
  background-color: #f2efeb;
  font-family: 'IBM Plex Sans Thai Looped';
  line-height: 1.6;
  font-weight: 400;
  color: #403f3e;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

body {
  margin:0;
  min-width: 320px;
  min-height: 100vh;
}

Header {
  padding: 10px;
}

h2 {
  margin: 15px;
  padding: 15px;
  font-family: "Klee One";
  font-style: semi-bold;
  font-weight: 600;
  font-size: 32px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #455a64;
}
`;
