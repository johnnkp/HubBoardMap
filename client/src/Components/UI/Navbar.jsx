import React, { useState } from "react";
import { Link as ReactLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const pages = ["Item1", "Item2", "Item3"];
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ background: "transparent", boxShadow: "none" }}
    >
      <Toolbar>
        <Box display="flex" justifyContent="space-between" width="100%">
          <>
            <IconButton
              size="large"
              onClick={handleOpenMenu}
              sx={{ mr: "1em" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-navbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseMenu}>
                  <Button size="small" LinkComponent={ReactLink} to={`${page}`}>
                    <Typography>{page}</Typography>
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </>
          <Button color="primary">Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
