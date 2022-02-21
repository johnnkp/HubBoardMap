// Responsive 4K homepage
import React from "react";
import Wrapper from "../../components/Helpers/Wrapper";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import LoginButton from "../../components/UI/LoginButton";
import HubBoardIcon from "../../image/HubBoard.svg";
import MessageIcon from "../../image/message_google.svg";
import TodoIcon from "../../image/to-do-iOS.svg";
import { CloudOutlined } from "@mui/icons-material";
import Copyright from "../../components/UI/Copyright";

import classes from "../../styles/global.module.css";

const OrangeText = styled("span")(({ theme }) => ({
  color: theme.palette.hOrange.main,
  fontWeight: "bolder",
}));

const Home = () => {
  return (
    <Wrapper>
      <Box height="100%">
        <Grid container mt="1em">
          <Grid item xs={0} md={2} />
          <Grid
            item
            container
            xs={12}
            md={8}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              ml={[2, 2, 0]}
              display="flex"
              alignItems="center"
              sx={{
                transition: "all 0.4s ease-out",
                "&:hover": { transform: "scale(1.1)" },
              }}
            >
              <img src={HubBoardIcon} height="75px" alt="HubBoard Icon" />
              <Typography fontSize="1.7em" ml={[0, 2, 4]}>
                HubBoard
              </Typography>
            </Box>
            <LoginButton sx={{ mr: [2, 2, 0] }} />
          </Grid>
          <Grid item xs={0} md={2} />
        </Grid>
        <Grid
          container
          className={classes.w3_slide_bottom}
          mt="3em"
          mb={32}
          spacing={8}
        >
          <Grid item xs={0} md={2} />
          <Grid
            item
            container
            xs={12}
            md={5}
            spacing={2}
            textAlign={["center", "center", "start"]}
            ml={[0, 0, 0, 0, 4]}
            pr={2}
          >
            <Grid item xs={12}>
              <Typography variant="h1" fontSize="4em">
                Welcome to <OrangeText>HubBoard</OrangeText>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h2" fontSize="2em">
                Easy-to-use taks list portal
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                LinkComponent={RouterLink}
                to="/register"
                color="hOrange"
                variant="contained"
              >
                Sign up now!
              </Button>
            </Grid>
          </Grid>
          <Grid item container xs={12} md={3} spacing={2}>
            <Grid item container xs={12} md={12} justifyContent="space-evenly">
              <Grid item md={6} textAlign="center">
                <img src={MessageIcon} height="100px" alt="Message Icon" />
              </Grid>
              <Grid item md={6} textAlign="center">
                <img src={TodoIcon} height="100px" alt="Todo Icon" />
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} textAlign="center">
              <CloudOutlined sx={{ fontSize: "100px" }} />
            </Grid>
          </Grid>
          <Grid item xs={0} md={2} />
        </Grid>
        <Copyright className={classes.w3_slide_bottom_07s} />
        <Typography color="silver">CSCI3100 Software Engineering Group Project</Typography>
      </Box>
    </Wrapper>
  );
};

export default Home;
