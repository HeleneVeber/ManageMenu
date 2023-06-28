import { Box, Container, FormControl, Grid, InputLabel, OutlinedInput } from '@mui/material';
import { useState } from 'react';
import TypeRecipeOptions from './TypeRecipeOptions';
import AddRemoveIngredients from './addIngredients/AddRemoveIngredients';

export default function RecipeForm() {
  const [ingredients, setIngredients] = useState(['']);

  return (
    <Container>
      <Box sx={{ mb: -1 }}>
        <h2>Ajoutez votre recette</h2>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Grid container direction="column">
          <Grid item>
            <Box sx={{ mb: 1 }}>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel htmlFor="nom-recette">Nom de la recette</InputLabel>
                <OutlinedInput
                  color="primary"
                  id="nom-recette"
                  name="nom-recette"
                  placeholder="Nom de la recette"
                  label="Nom de la recette"
                />
              </FormControl>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ mb: 1 }}>
              <FormControl sx={{ width: '100%' }}>
                <InputLabel htmlFor="description-recette">Description</InputLabel>
                <OutlinedInput
                  color="primary"
                  id="description-recette"
                  name="description-recette"
                  placeholder="Description de la recette"
                  label="Description"
                  rows={3}
                  multiline
                />
              </FormControl>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ mb: 1 }}>
              <AddRemoveIngredients ingredients={ingredients} setIngredients={setIngredients} />
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ mb: 1 }}>
              <Grid container direction="column">
                <Grid item>
                  <Box sx={{ mb: -1 }}>
                    <h4>Type de recette:</h4>
                  </Box>
                </Grid>
                <Grid item>
                  <Box>
                    <TypeRecipeOptions />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
