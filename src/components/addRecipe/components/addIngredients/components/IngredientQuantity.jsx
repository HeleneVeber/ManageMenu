import { FormControl, InputLabel, OutlinedInput } from '@mui/material';

export default function IngredientQuantity() {
  return (
    <FormControl>
      <InputLabel htmlFor="quantity-ingredient">Nombre</InputLabel>
      <OutlinedInput
        color="primary"
        id="quantity-ingredient"
        name="ingredientQuantity"
        placeholder="300"
        label="Nombre"
      />
    </FormControl>
  );
}
