import { useState } from 'react';
import { Box, Card, CardContent, Typography, IconButton, Divider } from '@mui/material';
import { CreateClassModal } from '../CreateClassModal';
import { DeleteModal } from '../DeleteModal';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { cardStyle, cardContentStyle, deleteIcon, cardMediaStyle } from './styles';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

export function ClassCard({ ...props }) {

  const navigate = useNavigate()
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={cardStyle}>
      {
        props.className ? (
          <CardContent sx={cardContentStyle}>
            <Typography sx={{ overflow: 'hidden', mx: '12px', mt: '32px', fontSize: '20px', boxSizing: 'border-box', position: 'relative' }} variant="h3" component="div">
              {props.className}
            </Typography>
            <Box sx={deleteIcon}>
              <IconButton sx={{fontSize: '32px'}} aria-label="open" onClick={()=>{navigate(`/turma/${props.id}`)}}>
                <RemoveRedEyeIcon fontSize="inherit" htmlColor="#666666" />
              </IconButton>
              <DeleteModal update={props.update} setUpdate={props.setUpdate} id={props.id} title="Deletar Turma" description={`Deseja mesmo deletar a turma ${props.className}?`} />
            </Box>
          </CardContent>
        ) : (
          <Box sx={cardMediaStyle}>
            <IconButton sx={{ fontSize: '48px', padding: '100%' }} onClick={handleOpen} aria-label="delete">
              <AddIcon fontSize="inherit" htmlColor="#00000048" />
            </IconButton>
            <CreateClassModal update={props.update} setUpdate={props.setUpdate} open={open} handleClose={handleClose} />
          </Box>
        )
      }
    </Card>
  )
}