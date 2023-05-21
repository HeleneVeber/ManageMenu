import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Checkbox from "../components/Utils/Checkbox";
import getRecipes from "../../src/api/getRecipes";

//import { styled } from "styled-components";

export default function Recipes() {
  const [recipesChecked, setRecipesChecked] = useState([]);
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

  useEffect(() => {
    setRecipesChecked(recipesData);
  }, [recipesData]);

  const handleRecipesChecked = (index) => {
    const newRecipesChecked = [...recipesChecked];
    newRecipesChecked[index].checked = !newRecipesChecked[index].checked;
    setRecipesChecked(newRecipesChecked);
  };

  // const getIngredients = (array) => {
  //   const ingredients = [];
  //   array.map((e) => {
  //     if (e.checked) {
  //       ingredients.push(e.ingredients);
  //       console.log("ingredients", ingredients);
  //     }
  //   });
  //   return ingredients;
  // };
  // const toto = getIngredients(recipeData);
  // console.log("toto", toto);

  // const test = { message: "bonjour" };
  //getIngredients(recipeData);

  console.log("recipesData", recipesData);
  console.log("recipesChecked", recipesChecked);
  return (
    <>
      <Header />
      <main>
        <h2>Choisissez vos recettes</h2>
        <form action="/ShoppingList">
          {recipesData.map((e, i) => (
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

          <input type="submit" value="Validez" />
        </form>
      </main>
    </>
  );
}
