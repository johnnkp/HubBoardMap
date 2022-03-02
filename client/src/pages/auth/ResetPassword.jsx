import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Stack,
  CircularProgress,
} from "@mui/material";
import { Link as RouterLink, useParams } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object({
  newPassword: Yup.string("Enter your new password")
    .min(6, "New password should be of minimum 6 character")
    .required("new Password is required"),
});

const ResetPassword = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const params = useParams();

  const formik = useFormik({
    initialValues: {
      newPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, action) => {
      setIsLoading(true);
      try {
        const res = await axios.post("/api/auth/resetPassword", {
          newPassword: values.newPassword,
          resetPasswordToken: params.token,
        });
        setIsSuccess(true);
      } catch (err) {
        setIsLoading(false);
        const { message: errorMsg } = err.response.data;
        alert(errorMsg);
        action.resetForm();
      }
    },
  });

  if (isSuccess) {
    return (
      <React.Fragment>
        <Box
          display="flex"
          height="100vh"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography fontSize="1.5em">
            Your password has been changed
          </Typography>
          <Button to="/" LinkComponent={RouterLink} color="hOrange">
            Return to homepage
          </Button>
        </Box>
      </React.Fragment>
    );
  }

  return (
    <Box
      display="flex"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Stack spacing={2}>
        <Typography color="hOrange.main" fontSize="1.5em">
          Please Enter the new password
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          display="grid"
          gap={2}
        >
          <TextField
            required
            fullWidth
            name="newPassword"
            label="Password"
            type="Password"
            id="newPassword"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.newPassword && Boolean(formik.errors.newPassword)
            }
            helperText={formik.touched.newPassword && formik.errors.newPassword}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="hOrange"
            endIcon={isLoading ? null : <SendIcon />}
          >
            {isLoading ? (
              <CircularProgress color="grey" size="1.5em" />
            ) : (
              "Send"
            )}
          </Button>
        </Box>{" "}
        <Button to="/" LinkComponent={RouterLink} color="hOrange">
          Return to homepage
        </Button>
      </Stack>
    </Box>
  );
};

export default ResetPassword;
