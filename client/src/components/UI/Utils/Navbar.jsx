import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
} from "@mui/material";
import HuboardIcon from "../../../image/HubBoard.svg";
import axios from "axios";
import { DropDownMenu } from "../";

// INFO: actual page need to set navigation
const pages = ["Profile", "Dashboard", "Setting", "Logout"];

const Navbar = () => {
  const [profilePhoto, setProfilePhoto] = useState();

  // INFO: get user profile photo on component mount
  useEffect(() => {
    const getUserProfilePic = async () => {
      try {
        const res = await axios.get("/api/user/profilePhoto", {
          responseType: "blob",
        });
        setProfilePhoto(URL.createObjectURL(res.data));
      } catch (err) {
        console.log(err.response);
      }
    };
    getUserProfilePic();
  }, []);

  return (
    <AppBar position="sticky" color="hOrange" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Box
            display="flex"
            minWidth="200px"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <img src={HuboardIcon} height="50px" alt="Huboard Icon" />
            <Typography>HubBoard</Typography>
          </Box>
          <Box
            display="flex"
            minWidth="200px"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Typography>Toolbar</Typography>
            <DropDownMenu profilePhoto={profilePhoto} pages={pages}/>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
