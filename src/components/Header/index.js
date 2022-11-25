import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { logout } from "../../services/auth";
import { Navigate, useNavigate } from "react-router-dom";

function Header({ type, classTabState, setClassTabState }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {type === "other" ? (
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              IClassroom
            </Typography>
          ) : (
            <>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6">Turma</Typography>
                <Typography variant="subtitle2">Código: 123</Typography>
              </Box>
              <Tabs
                value={classTabState}
                onChange={(event, newState) => setClassTabState(newState)}
                aria-label="tabs"
                sx={{ flexGrow: 1 }}
              >
                <Tab label="Postagens" id="tab1" aria-controls="tabpanel1" />
                <Tab label="Atividades" id="tab2" aria-controls="tabpanel2" />
                <Tab label="Dúvidas" id="tab3" aria-controls="tabpanel3" />
              </Tabs>
            </>
          )}

          <div>
            <IconButton
              size="large"
              aria-label="conta do usuário"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(event) => setAnchorEl(event.currentTarget)}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={() => setAnchorEl(null)}>Perfil</MenuItem>
              <MenuItem onClick={() => {logout(); navigate("/login")}}>Sair</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
