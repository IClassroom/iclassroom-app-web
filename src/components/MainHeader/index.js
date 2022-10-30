import { AppBar } from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { headerStyle } from './styles';

export function MainHeader() {
  return (
    <AppBar sx={headerStyle}>
      <NotificationsIcon htmlColor='#495796' size="medium" />
      <AccountCircleIcon style={{color: '#E2E8F0', fontSize: '64px'}} />
    </AppBar>
  )
}