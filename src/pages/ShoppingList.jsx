/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Checkbox from "../components/Utils/Checkbox";

export default function ShoppingList({ recipes }) {
  const [ingredients, setIngredients] = useState([
    {
      id: "",
      ingredient: "",
      checked: false,
    },
  ]);
  const getIngredients = (array) => {
    const recipesChecked = [];
    array.map((e) => {
      if (e.checked) {
        recipesChecked.push(e.ingredients);
      }
    });
    return recipesChecked.flat();
  };

  useEffect(() => {
    const ingredientsList = getIngredients(recipes);
    const mapIngredientsList = ingredientsList.map((e, i) => {
      return {
        id: i,
        ingredient: e,
        checked: false,
      };
    });
    setIngredients(mapIngredientsList);
  }, [recipes]);

  return (
    <>
      <h2>Voici votre liste de course</h2>
      {ingredients.map((e, i) => (
        <div key={i}>
          <Checkbox
            index={i}
            label={e.ingredient}
            checked={e.checked}
            nameId={`ingredient-${i}`}
            // onChange={() => handleRecipesChecked(i)}
          />
        </div>
      ))}
    </>
  );
}
