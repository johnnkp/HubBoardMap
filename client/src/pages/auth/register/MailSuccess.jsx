import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";

const MailSuccess = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      height="100vh"
      alignItems="center"
    >
      <Stack direction="column" display="flex" alignItems="center">
        <Typography textAlign="center" variant="h1" fontSize="2em">
          Verfication email send, please check you email
        </Typography>
        <Button
          to="/"
          LinkComponent={RouterLink}
          color="hOrange"
          fullWidth
        >
          Return to homepage
        </Button>
      </Stack>
    </Box>
  );
};

export default MailSuccess;
