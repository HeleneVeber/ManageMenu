/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function FloatButtonOpen({ onClick }) {
  return (
    <Box
      sx={{
        '& > :not(style)': {
          mt: -3
        },
        float: 'right'
      }}>
      <Fab size="medium" color="primary" aria-label="add" onClick={onClick}>
        <AddIcon />
      </Fab>
    </Box>
  );
}
