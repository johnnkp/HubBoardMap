import React from "react";
import { Button, Grid, Typography } from "@mui/material";

import HubBoardIcon from "../../Image/HubBoard.svg";
import MessageIcon from "../../Image/message_google.svg";
import TodoIcon from "../../Image/to-do-iOS.svg";
import { CloudOutlined, LoginRounded } from "@mui/icons-material";

import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.fade}>
      <Grid container mt="1em">
        <Grid xs={2} />
        <Grid item xs={1}>
          <img src={HubBoardIcon} height="75px" />
        </Grid>
        <Grid item container xs={1} alignItems="center">
          <Typography fontSize="1em">HubBoard</Typography>
        </Grid>
        <Grid
          item
          container
          xs={6}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Button
            sx={{ maxHeight: "50%" }}
            size="medium"
            startIcon={<LoginRounded />}
          >
            Log in
          </Button>
        </Grid>
        <Grid xs={1} />
      </Grid>
      <Grid container mt="5em">
        <Grid xs={2} />
        <Grid item container xs={6}>
          <Grid item xs={12}>
            <Typography variant="h1" fontSize="4em">
              Welcome to <span style={{ color: "orange" }}>HubBoard</span>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" fontSize="2em">
              Easy-to-use taks list portal
            </Typography>
          </Grid>
        </Grid>
          <Grid item container xs={3}>
          <Grid item xs={6} textAlign="center">
            <img src={MessageIcon} height="100px"/>
          </Grid>
          <Grid item xs={6} textAlign="center">
            <img src={TodoIcon} height="100px"/>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <CloudOutlined sx={{fontSize: "100px"}}/>
          </Grid>
        </Grid>
        <Grid xs={1} />
      </Grid>
    </div>
  );
};

export default Home;
