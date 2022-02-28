import React from "react";
import { useSearchParams } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";

const GoogleOAuth = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = {};
  // console.log(searchParams);
  for (let pair of searchParams.entries()) {
    queryParams[pair[0]] = pair[1];
  }
  useEffect(() => {
    const googleCallback = async () => {
      try {
        const res = await axios.post("/api/auth/google/callback", null, {
          params: queryParams,
        });
        console.log(res.data);
      } catch (err) {
        console.log(err.response);
      }
    };
    googleCallback();
  });

  return (
    <Box
      display="flex"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress color="hOrange" />
    </Box>
  );
};

export default GoogleOAuth;
