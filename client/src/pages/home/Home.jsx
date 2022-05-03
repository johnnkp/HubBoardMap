/* PROGRAM Home.jsx - Responsive home page
 * PROGRAMMER: johnnkp and SzelamC
 * VERSION 1: written 01-04-2022
 * Revision 1.1: 03-05-2022 code clean up
 * PURPOSE: Create home page and related design configuration.
 * DATA STRUCTURE:
 * import React, useState - react
 * import Link - react-router-dom
 * import Box, Button, Grid, Link,
 *        Typography, useMediaQuery, useTheme - @mui/material
 * import styled - @mui/system
 * import CloudOutlined - @mui/icons-material
 * import classes - global style css
 * import Wrapper - TypeScript no border stub
 * import Copyright, SignInButton - user interface module
 * import HubBoardIcon - HubBoard icon
 * import MessageIcon - Google Messages icon
 * import TodoIcon - iOS Notes icon
 * Variable OrangeText - const
 * Variable logoAnimation - MUI sx css
 * Variable isQHD - useMediaQuery Boolean
 * Variable isHD - useMediaQuery Boolean
 * Variable isMobile - useMediaQuery Boolean
 * Variable Home - export default const
 *
 * TEST CODE:
 * const intViewportWidth = window.innerWidth; - get window width
 * <p>intViewportWidth: {intViewportWidth}</p> - output window width to page
 * useMediaQuery: min-width = window.innerWidth
*/

import React from "react";
import {Link as RouterLink} from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {styled} from "@mui/system";
import {CloudOutlined} from "@mui/icons-material";
import classes from "../../styles/global.module.css";
import {Wrapper} from "../../components/Helpers";
import {Copyright, SignInButton} from "../../components/UI";
import HubBoardIcon from "../../image/HubBoard.svg";
import MessageIcon from "../../image/message_google.svg";
import TodoIcon from "../../image/to-do-iOS.svg";

const OrangeText = styled("span")(({theme}) => ({
  color: theme.palette.hOrange.main,
  fontWeight: "bolder",
}));

const Home = () => {
  let logoAnimation = {
    transition: "all 0.4s ease-out",
    "&:hover": {transform: "scale(1.2)"},
  };
  const isQHD = useMediaQuery(useTheme().breakpoints.up("xl"), {noSsr: true});
  const isHD = useMediaQuery(useTheme().breakpoints.down("lg"), {
    noSsr: true,
  });
  const isMobile = useMediaQuery(useTheme().breakpoints.down("md"), {
    noSsr: true,
  });

  if (isMobile === true) {
    logoAnimation = {
      transition: "all 0.5s ease-out",
      "&:hover": {transform: "scale(1.15)"},
    };
  }

  return (
    <Wrapper>
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        sx={{bgcolor: "#FDFDFD"}}
      >
        <Grid container mt="1em">
          <Grid item xs={0} md={1} lg={1} xl={2}/>
          <Grid
            item
            container
            xs={12}
            md={10}
            lg={10}
            xl={8}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              ml={[2, 2, 0]}
              display="flex"
              alignItems="center"
              sx={logoAnimation}
            >
              <img src={HubBoardIcon} height="75px" alt="HubBoard Icon"/>
              <Typography fontSize="1.7em" ml={isQHD ? 4 : 2}>
                HubBoard
              </Typography>
            </Box>
            <SignInButton sx={{mr: [2, 2, 0]}}/>
          </Grid>
          <Grid item xs={0} md={1} lg={1} xl={2}/>
        </Grid>

        <Grid
          container
          className={classes.w3_slide_bottom}
          gap={2}
          mt={isQHD ? 16 : isHD ? 11 : 11}
          mb={isQHD ? 16 : isHD ? 10 : 11}
        >
          <Grid item xs={0} md={2} lg={2}/>
          <Grid
            item
            container
            xs={12}
            md={5}
            lg={5}
            textAlign={["center", "center", "start"]}
          >
            <Grid item xs={12}>
              <Typography variant="h1" fontSize="4em">
                Welcome to <OrangeText>HubBoard</OrangeText>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={isHD ? "180%" : "2em"}>
                Easy-to-use task list portal
              </Typography>
            </Grid>
            <Grid item xs={12} pt="3%">
              <Button
                LinkComponent={RouterLink}
                to="/signup"
                color="hOrange"
                variant="contained"
              >
                Sign up now!
              </Button>
            </Grid>
          </Grid>

          <Grid
            item
            container
            xs={12}
            md={3}
            lg={3}
            marginLeft={[0, 0, 0, 2]}
            marginTop={[6, 6, 6, 0, 0]}
          >
            <Grid item xs={6} md={6} textAlign="center">
              <img src={MessageIcon} height="100px" alt="Message Icon"/>
            </Grid>
            <Grid
              item
              xs={6}
              md={6}
              textAlign="center"
              pl={isHD && !isMobile ? 2 : "initial"}
            >
              <img src={TodoIcon} height="100px" alt="Todo Icon"/>
            </Grid>
            <Grid item xs={12} md={12} textAlign="center" pt="5%">
              <CloudOutlined sx={{fontSize: "100px"}}/>
            </Grid>
          </Grid>
          <Grid item xs={0} md={2} lg={2}/>
        </Grid>

        <Copyright className={classes.w3_slide_bottom_07s}/>
        <Link
          href="https://www.cse.cuhk.edu.hk/academics/ug-course-list/csci3100/"
          target="_blank"
          className={classes.w3_slide_bottom_07s}
        >
          <Typography textAlign="center" color="silver" fontSize="0.875em">
            CSCI3100 Software Engineering Group Project
          </Typography>
        </Link>
      </Box>
    </Wrapper>
  );
};

export default Home;
