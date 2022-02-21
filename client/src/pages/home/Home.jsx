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
              sx={{
                transition: "all 0.4s ease-out",
                "&:hover": { transform: "scale(1.2)" },
              }}
            >
              <img src={HubBoardIcon} height="75px" alt="HubBoard Icon" />
              <Typography fontSize="1.7em" ml={[0, 2, 4]}>
                HubBoard
              </Typography>
            </Box>
            <LoginButton sx={{ mr: [2, 2, 0] }} />
          </Grid>
          <Grid item xs={0} md={1} lg={1} xl={2}/>
        </Grid>
        <Grid
          container
          className={classes.w3_slide_bottom}
          gap={2}
          mt={16}
          mb={16}
        >
          <Grid item xs={0} md={2} lg={2} />
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
          <Grid item container xs={12} md={3} lg={3}  marginLeft={[0, 0, 0, 2]} marginTop={[6, 6, 6, 0, 0]}>
            <Grid item xs={6} md={6} textAlign="center">
              <img src={MessageIcon} height="100px" alt="Message Icon"/>
            </Grid>
            <Grid item xs={6} md={6} textAlign='center'>
              <img src={TodoIcon} height="100px" alt="Todo Icon"/>
            </Grid>
            <Grid item xs={12} md={12} textAlign="center">
              <CloudOutlined sx={{fontSize: "100px"}}/>
            </Grid>
          </Grid>
          <Grid item xs={0} md={2} lg={2} />
        </Grid>
        <Copyright className={classes.w3_slide_bottom_07s} />
        <Typography textAlign="center" color="silver" variant="h6" fontSize="0.875em">CSCI3100 2021-2022 Spring Group Project</Typography>
      </Box>
    </Wrapper>
  );
};

export default Home;
