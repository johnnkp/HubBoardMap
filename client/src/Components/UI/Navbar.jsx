import React, { useState } from "react";
import { Link as ReactLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Grid,
} from "@mui/material";
import { MenuRounded, LoginRounded } from "@mui/icons-material";
import HubBoardIcon from "../../Image/HubBoard.svg";

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
      <Toolbar></Toolbar>
    </AppBar>
  );
};

export default Navbar;
