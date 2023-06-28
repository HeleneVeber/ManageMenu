/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';

export default function FloatButtonClose({ onClick }) {
  return (
    <Box
      sx={{
        '& > :not(style)': {
          mt: 1,
          mb: 1
        },
        float: 'right'
      }}>
      <Fab size="small" color="secondary" aria-label="close" onClick={onClick}>
        <CloseIcon />
      </Fab>
    </Box>
  );
}
