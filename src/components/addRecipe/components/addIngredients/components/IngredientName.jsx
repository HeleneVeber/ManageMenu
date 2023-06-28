/* eslint-disable react/prop-types */
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';

export default function IngredientName({ onChange, value }) {
  return (
    <FormControl>
      <InputLabel htmlFor="name-ingredient">Nom de l&apos;ingrédient</InputLabel>
      <OutlinedInput
        color="primary"
        id="name-ingredient"
        name="ingredientName"
        placeholder="Nom de l'ingrédient"
        label="Nom de l'ingredient"
        onChange={onChange}
        value={value}
      />
    </FormControl>
  );
}
