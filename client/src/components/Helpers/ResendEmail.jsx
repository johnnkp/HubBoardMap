import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Stack,
  CircularProgress,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});

const ResendEmail = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // INFO: operation type
  // 1 => resend verification letter
  // 2 => forgot password
  const type = props.type;

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, action) => {
      setIsLoading(true);
      const res = await props.resendEmailHandler(values, action);
      console.log(res);
      setIsLoading(false);
      if (res.success) {
        setIsSuccess(true);
      } else {
        const errorMsg = res.message;
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
          <Typography fontSize="1.5em">{props.children}</Typography>
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
          {type === 1
            ? "Please enter your email address to send the verification email"
            : "Please enter your email address to get the reset password token"}
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
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
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
            ) : type === 1 ? (
              "Resend"
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

export default ResendEmail;
