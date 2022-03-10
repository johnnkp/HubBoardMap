import React from "react";
import { Wrapper } from "../Helpers";
import { Navbar, SideBar } from "../UI";
import { Box } from "@mui/material"

// INFO: Mainpage layout
const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      <Box display="flex">
        <SideBar />
        {children}
      </Box>
    </Wrapper>
  );
};

export default Layout;
