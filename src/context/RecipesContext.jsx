/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { getRecipes } from "../api/getRecipes";

const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [recipesData, setrecipesData] = useState([
    {
      recipe: "",
      checked: false,
      ingredients: [],
    },
  ]);

  useEffect(() => {
    const getRecipesLoad = async () => {
      const data = await getRecipes();
      const recipes = data.map((e) => {
        return {
          recipe: e.recipe.label,
          checked: false,
          ingredients: e.recipe.ingredientLines,
        };
      });
      setrecipesData(recipes);
    };
    getRecipesLoad();
  }, []);
  return (
    <RecipeContext.Provider value={recipesData}>
      {children}
    </RecipeContext.Provider>
  );
};
export { RecipeContext, RecipeProvider };
