import { FormControl, InputLabel, OutlinedInput } from '@mui/material';

export default function IngredientUnit() {
  return (
    <FormControl>
      <InputLabel htmlFor="unit-ingredient">Mesure</InputLabel>
      <OutlinedInput
        color="primary"
        id="unit-ingredient"
        name="ingredientUnit"
        placeholder="gr"
        label="Mesure"
      />
    </FormControl>
  );
}
