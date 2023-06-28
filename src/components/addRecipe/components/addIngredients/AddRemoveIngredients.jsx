/* eslint-disable react/prop-types */
import { Box, Grid, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import IngredientQuatity from './components/IngredientQuantity';
import IngredientUnit from './components/IngredientUnit';
import IngredientName from './components/IngredientName';

export default function AddRemoveIngredients({ ingredients, setIngredients }) {
  const handleInput = (event, index) => {
    const data = [...ingredients];
    data[index] = event.target.value;
    setIngredients(data);
  };

  const onClickAdd = (event) => {
    event.preventDefault();
    setIngredients([...ingredients, '']);
  };
  const onClickRemove = (event, index) => {
    event.preventDefault();
    const data = [...ingredients];
    data.splice(index, 1);
    setIngredients(data);
  };

  return (
    <>
      {ingredients.map((value, index) => {
        const ingredientKey = `ingredient-${index}-${value}`;
        return (
          <Grid container direction="row" key={ingredientKey}>
            <Grid item xs={4.35} sm={2}>
              <Box sx={{ m: 0.5 }}>
                <IngredientQuatity />
              </Box>
            </Grid>
            <Grid item xs={4.35} sm={2}>
              <Box sx={{ m: 0.5 }}>
                <IngredientUnit />
              </Box>
            </Grid>
            <Grid item xs={9} sm={6}>
              <Box sx={{ m: 0.5 }}>
                <IngredientName onChange={(event) => handleInput(event, index)} value={value} />
              </Box>
            </Grid>
            <Grid item xs={1.25} sm={1} display="flex" alignItems="center">
              <Box sx={{ m: 0.5 }}>
                <IconButton size="small" color="primary" onClick={(event) => onClickAdd(event)}>
                  <AddCircleIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={1.25} sm={1} display="flex" alignItems="center">
              {ingredients.length !== 1 ? (
                <Box sx={{ m: 0.5 }}>
                  <IconButton
                    size="small"
                    color="secondary"
                    onClick={(event) => onClickRemove(event, index)}>
                    <CancelIcon />
                  </IconButton>
                </Box>
              ) : null}
            </Grid>
          </Grid>
        );
      })}
    </>
  );
}
