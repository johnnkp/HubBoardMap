// Responsive 4K homepage
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import Wrapper from "../../Components/Helpers/Wrapper";
import LoginButton from "../../Components/UI/LoginButton";
import Copyright from "../../Components/UI/Copyright";
import HubBoardIcon from "../../Image/HubBoard.svg";
import { CloudOutlined } from "@mui/icons-material";
// https://play-lh.googleusercontent.com/OY4rxeNTPaHwyOTZ-RUooqJvPnO5QUYmQcw0dhD90Mu6UWItOSZfQv7ks_FscbBow0M
import MessageIcon from "../../Image/message_google.svg";
// https://support.apple.com/library/content/dam/edam/applecare/images/en_US/ios/ios11-notes-app-icon.png
import TodoIcon from "../../Image/to-do-iOS.svg";

import classes from "../../Styles/global.module.css";

const OrangeText = styled("span")(({ theme }) => ({
  color: theme.palette.hOrange.main,
  fontWeight: "bolder",
}));

const Home = () => {
  const isQHD = useMediaQuery("(min-width: 1300px)");
  // react-responsive: min-width = window.innerWidth
  const intViewportWidth = window.innerWidth;

  if (isQHD) {
    return (
      <Wrapper>
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
            ml={[0, 0, 4]}
            pr={2}
          >
            <Grid item xs={12}>
              <Typography variant="h1" fontSize="4em">
                Welcome to <OrangeText>HubBoard</OrangeText>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h2" fontSize="2em" variant="poster">
                Easy-to-use task list portal
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
            <Grid item xs={12} md={6} textAlign="center">
              <img src={MessageIcon} height="100px" alt="Message Icon" />
            </Grid>
            <Grid item xs={12} md={6} textAlign="center">
              <img src={TodoIcon} height="100px" alt="Todo Icon" />
            </Grid>
            <Grid item xs={12} md={12} textAlign="center">
              <CloudOutlined sx={{ fontSize: "100px" }} />
            </Grid>
          </Grid>
          <Grid item xs={0} md={2} />
        </Grid>
        <Copyright className={classes.w3_slide_bottom_07s} />
        <p className={classes.w3_slide_bottom_07s} align="left">
          <Typography variant="body2" color="Silver">
            <Link
              color="inherit"
              href="https://www.cse.cuhk.edu.hk/academics/ug-course-list/csci3100/"
              target="_blank"
            >
              CSCI3100 Software Engineering Group Project
            </Link>
          </Typography>
        </p>
      </Wrapper>
    );
  } else if (!isQHD) {
    return (
      <Wrapper className={classes.homepage}>
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
          <Grid item xs={0} md={2} />
        </Grid>
        <Grid
          container
          className={classes.w3_slide_bottom}
          mt="2.5em"
          mb={5}
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
            ml={[0, 0, 4]}
            pr={2}
          >
            <Grid item xs={12}>
              <Typography variant="h1" fontSize="4em">
                Welcome to <OrangeText>HubBoard</OrangeText>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h2" fontSize="2em" variant="poster">
                Easy-to-use task list portal
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                LinkComponent={RouterLink}
                to="/register"
                color="hOrange"
                variant="contained"
                sx={{ fontFamily: "sf_pro_text_semibold" }}
              >
                Sign up now!
              </Button>
            </Grid>
          </Grid>
          <Grid item container xs={12} md={3} spacing={2}>
            <Grid item xs={12} md={6} textAlign="center">
              <img src={MessageIcon} height="100px" alt="Message Icon" />
            </Grid>
            <Grid item xs={12} md={6} textAlign="center">
              <img src={TodoIcon} height="100px" alt="Todo Icon" />
            </Grid>
            <Grid item xs={12} md={12} textAlign="center">
              <CloudOutlined sx={{ fontSize: "100px" }} />
            </Grid>
          </Grid>
          <Grid item xs={0} md={2} />
        </Grid>
        <Copyright className={classes.w3_slide_bottom_07s} />
        <p className={classes.w3_slide_bottom_07s} align="left">
          <Typography variant="body2" color="Silver">
            <Link
              color="inherit"
              href="https://www.cse.cuhk.edu.hk/academics/ug-course-list/csci3100/"
              target="_blank"
            >
              CSCI3100 Software Engineering Group Project
            </Link>
          </Typography>
        </p>
        <p>intViewportWidth: {intViewportWidth}</p>
      </Wrapper>
    );
  }
};

export default Home;
