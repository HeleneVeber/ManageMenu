import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import ShoppingList from './pages/ShoppingList';
import getRecipes from './api/getRecipes';
import Layout from './components/Layout';

const globalTheme = createTheme({
  palette: {
    primary: {
      light: '#6A7B83',
      main: '#455A64',
      contrastText: 'rgba(242, 239, 235, 1)'
    },
    secondary: {
      main: '#F6676D',
      contrastText: '#403f3e'
    },
    background: {
      default: '#f2efeb',
      paper: '#f2efeb'
    },
    text: {
      primary: '#403f3e'
    }
  },
  typography: {
    h1: {
      fontFamily: 'Cabin Sketch'
    }
  }
});

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
      <ThemeProvider theme={globalTheme}>
        <CssBaseline />
        <Router>
          <Layout>
            {/* <GlobalStyle /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/recipes"
                element={<Recipes recipes={recipesData} setRecipes={setRecipesData} />}
              />
              <Route path="/ShoppingList" element={<ShoppingList recipes={recipesData} />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
}

// const GlobalStyle = createGlobalStyle`

// *{
//   margin:0;
//   padding:0;
//   box-sizing: border-box;
// }

// :root {
//   background-color: #f2efeb;
//   font-family: 'IBM Plex Sans Thai Looped';
//   line-height: 1.6;
//   font-weight: 400;
//   color: #403f3e;
//   text-rendering: optimizeLegibility;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   -webkit-text-size-adjust: 100%;
// }

// body {
//   margin:0;
//   min-width: 320px;
//   min-height: 100vh;
// }

// Header {
//   padding: 10px;
// }

// h2 {
//   margin: 15px;
//   padding: 15px;
//   font-family: "Klee One";
//   font-style: semi-bold;
//   font-weight: 600;
//   font-size: 32px;
//   line-height: 26px;
//   display: flex;
//   align-items: center;
//   text-align: center;

//   color: #455a64;
// }
// `;
