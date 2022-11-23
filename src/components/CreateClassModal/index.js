import { useState } from 'react';

import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { modalStyle } from './styles';

import api from '../../services/api';

export function CreateClassModal({...props}) {
  const [className, setClassName] = useState('');
  const [classDescription, setClassDescription] = useState('');

  const handleClear = () => {
    setClassName('');
    setClassDescription('');
  }

  const onSubmit = () => {
    api.post('/turma/', {
      titulo: className,
      descricao: classDescription,
      professor_id: 1
    }, {
      headers: {
        Authorization: `token  b1974fdb83062e9eb140b78aa503cd06fc240334`
      },
    }).then(response => {
      window.alert(`Turma criada com ucesso!`)
      props.setUpdate(!props.update)
    }).catch(error => {
      console.log(error);
    })

    
    handleClear();
    props.handleClose();
  };

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Criar Turma
        </Typography>
        <TextField
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          autoFocus
          margin="none"
          id="title"
          label="Título"
          type="text"
          fullWidth
          variant="outlined"
          sx= {{ mt: '32px' }}
        />

        <TextField
          value={classDescription}
          onChange={(e) => setClassDescription(e.target.value)}
          autoFocus
          margin="none"
          id="description"
          label="Descrição"
          type="text"
          fullWidth
          variant="filled"
          multiline
          rows={3}
          sx={{mt: '16px'}}
        />

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={props.handleClose} sx={{mt: '32px', borderRadius: '16px'}} variant="outlined">Cancelar</Button>
          <Button onClick={onSubmit} sx={{mt: '32px', borderRadius: '16px'}} variant="contained">Criar</Button>
        </Box>
      </Box>
    </Modal>
  )
}