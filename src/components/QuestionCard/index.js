import { Card, CardHeader, Avatar, Box, Typography } from '@mui/material';
import { cardStyle, classNameStyle, headerTextStyle } from './styles';

export function QuestionCard({...props}) {
  return (
    <Card sx={cardStyle}>
      <Box sx={{display: 'flex', ml: '8px', mt: '12px', width: '100%', height: '100%'}}>
        <Avatar sx={{ bgcolor: 'white', color: '#495796' }} aria-label="user" />
        <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}>
          <Box sx={headerTextStyle}>
            <Typography component="h4" sx={{ fontSize: '14px', color: '#555555', ml: '8px' }}>
              {props.userName}
            </Typography>
            
            <Box sx={{ display: 'flex', mr: '24px', gap: '12px' }}>
              <Typography component="h5" sx={classNameStyle}>
                {props.className}
              </Typography>
              
              <Typography component="p" sx={{ fontSize: '14px', color: '#495796', ml: '8px', fontWeight: 'bold' }}>
                {props.commentNumber} Comentários
              </Typography>
            </Box>
          </Box>

          <Typography component="p" sx={{ fontSize: '14px', color: '#495796', ml: '8px', height: '95px'}}>
            {props.comment}
          </Typography>
        </Box>
      </Box>

    </Card>
  )
}