import { Collapse } from '@mui/material';
import { useState } from 'react';
import FloatButtonOpen from './components/FloatButtonOpen';
import FloatButtonClose from './components/FloatButtonClose';
import RecipeForm from './components/RecipeForm';

export default function AddRecipe() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  return (
    <>
      {openDialog === false ? (
        <FloatButtonOpen onClick={handleOpenDialog} />
      ) : (
        <FloatButtonClose onClick={handleCloseDialog} />
      )}
      {/* <Dialog fullScreen open={openDialog} onClose={handleCloseDialog}> */}

      <Collapse in={openDialog}>
        <RecipeForm />
      </Collapse>

      {/* </Dialog> */}
    </>
  );
}
