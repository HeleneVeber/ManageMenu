import { useState, useEffect } from "react";
import { getRecipes } from "../api/getRecipes";
import Header from "../components/Header/Header";
import Checkbox from "../components/Checkbox/Checkbox";
//import { styled } from "styled-components";

export default function Recipes() {
  const [recipesChecked, setRecipesChecked] = useState([
    {
      id: "",
      recipe: "",
      checked: false,
    },
  ]);

  useEffect(() => {
    const getRecipesLoad = async () => {
      const data = await getRecipes();
      const recipes = data.map((e) => {
        return {
          recipe: e.recipe.label,
          checked: false,
        };
      });
      setRecipesChecked(recipes);
    };
    getRecipesLoad();
  }, []);

  const handleRecipesChecked = (index) => {
    const updateRecipesChecked = [...recipesChecked];
    updateRecipesChecked[index].checked = !updateRecipesChecked[index].checked;
    setRecipesChecked(updateRecipesChecked);
  };
  //console.log(recipesChecked);
  return (
    <>
      <Header />
      <main>
        <h2>Choisissez vos recettes</h2>

        {recipesChecked.map((e, i) => (
          <div key={i}>
            <Checkbox
              index={i}
              label={e.recipe}
              checked={e.checked}
              nameId={`recipe-${i}`}
              onChange={() => handleRecipesChecked(i)}
            />
          </div>
        ))}
      </main>
    </>
  );
}
