import { useState, useEffect } from "react";
import { getRecipes } from "../api/getRecipes";
import Header from "../components/Header/Header";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getRecipesLoad() {
      const data = await getRecipes();
      setRecipes(data);
    }
    getRecipesLoad();
  }, []);

  return (
    <>
      <Header />
      <main>
        <h1>Choisissez vos recettes</h1>
        {recipes.map((e, i) => (
          <div key={i}>
            <input
              type="checkbox"
              name="recipe"
              id="recipe"
              value={e.recipe.label}
            />
            <label htmlFor="recipe">{e.recipe.label}</label>
          </div>
        ))}
      </main>
    </>
  );
}
