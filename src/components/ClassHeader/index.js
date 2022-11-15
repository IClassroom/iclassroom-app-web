import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Grid
} from "@mui/material";
import { Link } from "react-router-dom";
import { headerStyle } from "./styles";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";

const drawerWidth = 240;
const navItems = [
  ["Postagem", "/class-post"],
  ["Atividades", "/class-activities"],
  ["Dúvidas", "/class-doubts"]
];

export function ClassHeader(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        G.P. 2022.2
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton to={item[1]} sx={{ textAlign: "center", color: "#495796" }}>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar sx={headerStyle}>
        <Toolbar>
          <IconButton
            firstChild={true} 
            float="left"
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon htmlColor="#495796" />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", color: "#000000" },
            }}
          >
            G.P. 2022.2
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                component={Link}
                to={item[1]}
                key={item[0]}
                sx={{ color: "#495796" }}
              >
                {item[0]}
              </Button>
            ))}
          </Box>

          <Grid>
            <NotificationsIcon htmlColor='#495796' size="medium" />
	          <AccountCircleIcon style={{color: '#E2E8F0', fontSize: '64px'}} />
          </Grid>

        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
