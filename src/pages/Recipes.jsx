/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Checkbox from '../components/Utils/Checkbox';
// import { styled } from "styled-components";

export default function Recipes({ recipes, setRecipes }) {
  const handleRecipesChecked = (index) => {
    const newRecipes = [...recipes];
    newRecipes[index].checked = !newRecipes[index].checked;
    setRecipes(newRecipes);
  };

  console.log('recipes', recipes);
  return (
    <>
      <Header />
      <main>
        <h2>Choisissez vos recettes</h2>

        <form>
          {recipes.map((e) => (
            <div key={e.id}>
              <Checkbox
                /* nameId fill <label htmlFor> <input id name> */
                nameId={`recipe-${e.id}`}
                value={e.recipe}
                checked={e.checked}
                onChange={() => handleRecipesChecked(e.id)}
                borderColorChecked={e.checked ? '2px solid #8BB2A0' : ''}
                hoverBackground="#8BB2A087"
                colorCheck="#8BB2A0"
              />
            </div>
          ))}
          <Link to="/shoppingList">
            <input type="submit" value="Validez" />
          </Link>
        </form>
      </main>
    </>
  );
}
