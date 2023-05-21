import { useContext, useState } from "react";
import { RecipeContext } from "../context/RecipesContext";
import Header from "../components/Header/Header";
import Checkbox from "../components/Utils/Checkbox";
import { useEffect } from "react";

//import { styled } from "styled-components";

export default function Recipes() {
  const recipesData = useContext(RecipeContext);
  const [recipesChecked, setRecipesChecked] = useState([]);

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
