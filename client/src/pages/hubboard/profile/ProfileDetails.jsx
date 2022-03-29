import { PhotoCamera } from "@mui/icons-material";
import { Avatar, Grid, IconButton, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Input = styled("input")({
  display: "none",
});

const ProfileDetails = () => {
  const [userInfo, setUserInfo] = useState({ username: "", email: "" });
  const [userPic, setUserPic] = useState(null);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const res = await axios.get("/api/user/info");
        if (res.data.success) {
          setUserInfo({ username: res.data.username, email: res.data.email });
        }
      } catch (err) {}
    };
    getUserInfo();
  }, []);

  useEffect(() => {
    const getUserProfilePic = async () => {
      try {
        const res = await axios.get("/api/user/profilePhoto", {
          responseType: "blob",
        });
        setUserPic(URL.createObjectURL(res.data));
      } catch (err) {
        console.log(err.response);
      }
    };
    getUserProfilePic();
  }, []);

  const uploadFile = async (e) => {
    try {
      const res = await axios.put("/api/user/profilePhoto", {
        profilePhoto: e.target.files[0],
      });
      console.log(res);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <Grid container gap={2} m={4}>
      <Grid
        container
        item
        xs={4}
        display="flex"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Typography variant="h1" fontSize="2em">
            Account Name:
          </Typography>
        </Grid>
        <Grid item>
          <Paper
            sx={{
              backgroundColor: (theme) => theme.palette.hOrange.main,
              paddingX: 4,
            }}
          >
            <Typography variant="h1" fontSize="2em" color="white">
              {userInfo.username}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={6}
        display="flex"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <Typography variant="h1" fontSize="2em">
            Email:
          </Typography>
        </Grid>
        <Grid item>
          <Paper
            sx={{
              backgroundColor: (theme) => theme.palette.hOrange.main,
              paddingX: 4,
            }}
          >
            <Typography variant="h1" fontSize="2em" color="white">
              {userInfo.email}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" alignItems="center" component="form">
          <Typography variant="h1" fontSize="2em">
            Profile Picture
          </Typography>
          <Avatar
            src={userPic}
            alt="user profile picture"
            sx={{ width: 50, height: 50 }}
          />
          <label htmlFor="icon-button-file">
            <Input
              accept="image/*"
              id="icon-button-file"
              type="file"
              onChange={uploadFile}
            />
            <IconButton
              color="hOrange"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProfileDetails;
