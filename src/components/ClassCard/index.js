import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Box, Card, CardContent, Typography, IconButton } from '@mui/material';
import { cardStyle, cardContentStyle, deleteIcon, cardMediaStyle } from './styles';

export function ClassCard({...props}) {
  return (
    <Card sx={cardStyle}>
        {
          props.className ? (
            <CardContent sx={cardContentStyle}>
              <Typography sx={{mx: '12px', mt: '32px', fontSize: '20px'}} variant="h3" component="div">
                {props.className}
              </Typography>
              <Box sx={deleteIcon}>
                <IconButton sx={{padding: 0}} aria-label="delete" size='medium'>
                  <DeleteIcon fontSize='inherit' htmlColor='#666666' />
                </IconButton>
              </Box>
            </CardContent>
          ) : (
            <Box sx={cardMediaStyle}>
              <IconButton sx={{fontSize: '48px', padding: '100%'}} aria-label="delete">
                <AddIcon fontSize="inherit" htmlColor="#00000048" />
              </IconButton>
            </Box>
          )
        }
    </Card>
  )
}