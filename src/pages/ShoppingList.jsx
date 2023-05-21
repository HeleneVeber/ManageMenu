import { useContext } from "react";
import { RecipeContext } from "../context/RecipesContext";

export default function ShoppingList() {
  const recipesData = useContext(RecipeContext);
  console.log(recipesData);
  return (
    <>
      <h2>Voici votre liste de course</h2>
    </>
  );
}
