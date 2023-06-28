import { Box, Checkbox, FormControlLabel, Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import handleArrayCheckbox from '../../../functions/handleCheckbox';

export default function TypeRecipeOptions() {
  const [recipeTypes, setRecipeTypes] = useState([]);

  const types = ['Végétarienne', 'Végan'];
  useEffect(() => {
    const typesMap = types.map((e, i) => {
      return {
        id: i,
        type: e,
        checked: false
      };
    });

    setRecipeTypes(typesMap);
  }, []);

  return (
    <Grid container direction="column">
      {recipeTypes.map((e) => {
        return (
          <Grid item sx={{ mt: -2 }} key={e.id}>
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    size="medium"
                    checked={e.checked}
                    onChange={() => handleArrayCheckbox(recipeTypes, setRecipeTypes, e.id)}
                  />
                }
                label={e.type}
              />
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}
