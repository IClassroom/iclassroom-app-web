import { useState } from 'react';
import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import { CreateClassModal } from '../CreateClassModal';
import { DeleteModal } from '../DeleteModal';

import { cardStyle, cardContentStyle, deleteIcon, cardMediaStyle } from './styles';
import AddIcon from '@mui/icons-material/Add';

export function ClassCard({...props}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={cardStyle}>
        {
          props.className ? (
            <CardContent sx={cardContentStyle}>
              <Typography sx={{overflow: 'hidden', mx: '12px', mt: '32px', fontSize: '20px', boxSizing: 'border-box', position: 'relative'}} variant="h3" component="div">
                {props.className}
              </Typography>
              <Box sx={deleteIcon}>
                <DeleteModal update={props.update} setUpdate={props.setUpdate} id={props.id} title="Deletar Turma" description={`Deseja mesmo deletar a turma ${props.className}?`} />
              </Box>
            </CardContent>
          ) : (
            <Box sx={cardMediaStyle}>
              <IconButton sx={{fontSize: '48px', padding: '100%'}} onClick={handleOpen} aria-label="delete">
                <AddIcon fontSize="inherit" htmlColor="#00000048" />
              </IconButton>
              <CreateClassModal update={props.update} setUpdate={props.setUpdate} open={open} handleClose={handleClose} />
            </Box>
          )
        }
    </Card>
  )
}