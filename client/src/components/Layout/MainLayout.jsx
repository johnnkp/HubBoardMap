/* PROGRAM MainLayout.jsx - Responsive main interface module
 * PROGRAMMER: johnnkp and SzelamC
 * VERSION 1: written 31-03-2022
 * Revision 1.1: 04-05-2022 code clean up
 * PURPOSE: Create main interface and related design configuration.
 * DATA STRUCTURE:
 * import React, useState - react
 * import Box, CssBaseline - @mui/material
 * import Wrapper - TypeScript no border stub
 * import Navbar, SideBar - user interface module
 * Variable drawerOpen, setDrawerOpen - React State Hook
 * Variable handleDrawerToggle - drawer onclick handler
 * Variable MainLayout - export default const
 *
*/

import React, {useState} from "react";
import {Box, CssBaseline} from "@mui/material";
import {Wrapper} from "../Helpers";
import {Navbar, SideBar} from "../UI";

// INFO: Mainpage layout
const MainLayout = ({children, profilepage}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Wrapper>
      <CssBaseline/>
      <Navbar handleDrawerToggle={handleDrawerToggle} ToolbarButton={!profilepage}/>
      <Box display="flex">
        <SideBar
          drawerOpen={drawerOpen}
          handleDrawerToggle={handleDrawerToggle}
          profilepage={profilepage}
        />
        <Box component="main" sx={{flexGrow: 1}}>
          {children}
        </Box>
      </Box>
    </Wrapper>
  );
};

export default MainLayout;
