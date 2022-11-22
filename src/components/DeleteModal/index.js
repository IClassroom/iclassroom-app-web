import React, { useState } from 'react';
import { Button, Modal, Typography, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import api from '../../services/api';

import { boxStyle } from './styles';

export function DeleteModal({...props}) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleDelete = () => {
    api.delete(`/turma/${props.id}`).then(() => {
      window.alert(`Turma deletada com sucesso!`)
      props.setUpdate(!props.update)
    }).catch(err => {
      console.log(err)
    })
    
    handleClose()
  }

  return (
    <>
      <IconButton sx={{padding: 0}} aria-label="delete" size='medium' onClick={handleOpen}>
        <DeleteIcon fontSize='inherit' htmlColor='#666666' />
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.description}
          </Typography>
          <Box sx={{display: 'flex', flex: 1, justifyContent: 'space-between'}}>
            <Button sx={{mt: 2, backgroundColor: '#FFF', color: '#000'}} color="inherit" variant="contained" onClick={handleClose}>Cancelar</Button>
            <Button sx={{mt: 2, backgroundColor: '#CAA4A4'}} color="error" variant="contained" onClick={handleDelete}>Deletar</Button>
          </Box>
        </Box>
      </Modal>
    </>
  )
}