/* eslint-disable react/prop-types */
import Checkbox from '../components/utils/Checkbox';
import handleArrayCheckbox from '../functions/handleCheckbox';
import ButtonLink from '../components/utils/ButtonLink';

export default function Recipes({ recipes, setRecipes }) {
  // console.log('recipes', recipes);
  return (
    <main>
      <h2>Choisissez vos recettes</h2>
      {recipes.map((e) => (
        <div key={e.id}>
          <Checkbox
            /* nameId fill <label htmlFor> <input id name> */
            nameId={`recipe-${e.id}`}
            value={e.recipe}
            checked={e.checked}
            onChange={() => handleArrayCheckbox(recipes, setRecipes, e.id)}
            borderColorChecked={e.checked ? '2px solid #8BB2A0' : ''}
            hoverBackground="#8BB2A087"
            colorCheck="#8BB2A0"
          />
        </div>
      ))}
      <ButtonLink linkTo="/shoppingList" value="Validez" />
    </main>
  );
}
