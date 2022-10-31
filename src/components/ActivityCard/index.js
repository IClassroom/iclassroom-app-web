import { Card, Avatar, Box, Typography, CardHeader } from '@mui/material';
import { cardStyle, classNameStyle, headerTextStyle, daysAgoStyle, descriptionStyle } from './styles';

export function ActivityCard({...props}) {
  return (
    <Card sx={cardStyle}>
      <Box sx={{display: 'flex', flexDirection: 'column', pr: '8px', mt: '12px', width: '100%', justifyContent: 'space-between'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
          <Box sx={headerTextStyle}>
            <Box sx={{ display: 'flex', flex: 1, ml: '12px', justifyContent: 'space-between' }}>
              <Typography component="h5" sx={classNameStyle}>
                {props.className}
              </Typography>
              
              <Typography component="p" sx={daysAgoStyle}>
                {props.daysAgo} Dias
              </Typography>
            </Box>
          </Box>

          <Typography component="p" sx={descriptionStyle}>
            {props.description}
          </Typography>
        </Box>

        <Box sx={{display: 'flex', justifyContent: 'flex-end', mb: '12px'}}>
          {props.attachment}
        </Box>
      </Box>
      
    </Card>
  )
}