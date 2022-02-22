import React, { useEffect, useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import {
  Box,
  Stack,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";

const MailVerification = () => {
  const { token } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [isFailed, setIsFailed] = useState(false);

  useEffect(async () => {
    console.log(token);
    try {
      const res = await axios.get(`/api/auth/emailVerify/${token}`);
      console.log(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err.response);
      setIsLoading(false);
      setIsFailed(true);
    }
  }, [token]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      height="100vh"
      alignItems="center"
    >
      <Stack direction="column" justifyContent="center">
        <Typography textAlign="center" variant="h1">
          <Box display={isLoading ? "inline" : "none"}>
            <Typography>Waiting for verification</Typography>
            <Typography>
              <CircularProgress color="hOrange" sx={{ fontSize: "3em" }} />
            </Typography>
          </Box>
          <Box display={!isLoading && isFailed ? "inline-block" : "none"}>
            <Typography>Email verification token not found!</Typography>
            <Typography>
              <CancelIcon color="hOrange" sx={{ fontSize: "3em" }} />
            </Typography>
          </Box>
          <Box display={!isLoading && isFailed ? "none" : "inline-block"}>
            <Typography>Verification success</Typography>
            <Typography>
              <CheckCircleIcon color="hOrange" sx={{ fontSize: "3em" }} />
            </Typography>
          </Box>
        </Typography>
        <Button to="/" LinkComponent={RouterLink} color="hOrange">
          Return to homepage
        </Button>
      </Stack>
    </Box>
  );
};

export default MailVerification;
