import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Button,
  Grid,
  TextField,
  Typography,
  Popover,
  Box,
  CircularProgress,
} from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { LoginRounded } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

// create yup validation schema
const validationSchema = Yup.object({
  username: Yup.string("Enter your username").required("Email is required"),
  password: Yup.string("Enter your password")
    .min(6, "Password should be of minimum 6 character")
    .required("Password is required"),
});

const SignInButton = (props) => {
  // initialize navigator
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      setIsLoading(true);
      try {
        const res = await axios.post("/api/auth/login", values);
        console.log(res);
        setIsSuccess(true);
        setIsLoading(false);
        setTimeout(() => {
          navigate("/hubboard");
        }, 2000);
      } catch (err) {
        setIsLoading(false);
        setIsSuccess(false);
        console.log(err.response.data);
        const errorMsg = err.response.data.message;
        alert(errorMsg);
        actions.resetForm();
      }
      // alert(JSON.stringify(values, null, 2));
    },
  });

  const isOpen = Boolean(anchorEl);

  return (
    <Box {...props}>
      <Button
        sx={{ maxHeight: "50%", boxShadow: 1 }}
        size="medium"
        startIcon={<LoginRounded />}
        onClick={handleClick}
        color="hOrange"
        variant="outlined"
      >
        sign in
      </Button>
      <Popover
        disableAutoFocus
        onClose={handleClose}
        open={isOpen}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Grid container p={2} maxWidth="500px" minWidth="200px" spacing={3}>
          <Grid
            component="form"
            onSubmit={formik.handleSubmit}
            item
            container
            xs={12}
            spacing={3}
          >
            <Grid item xs={12} textAlign="center">
              <Typography variant="h1" fontSize="2em">
                Log in
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
            </Grid>
            <Grid item xs={12} textAlign="center">
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Button
                color="hOrange"
                variant="contained"
                size="medium"
                type="submit"
              >
                {isLoading ? (
                  <CircularProgress color="grey" size="1.5em" />
                ) : isSuccess ? (
                  <CheckIcon />
                ) : (
                  "Log in"
                )}
              </Button>
            </Grid>
          </Grid>
          <Grid item container xs={12} textAlign="center" alignItems="center">
            <Grid item xs={6}>
              <Typography variant="h4" fontSize="1.5em">
                New to HubBoard?
              </Typography>
            </Grid>
            <Grid item xs={6} textAlign="start">
              <Button
                color="hOrange"
                variant="outlined"
                sx={{ boxShadow: 2 }}
                LinkComponent={RouterLink}
                to="/auth/register"
                startIcon={
                  <FontAwesomeIcon className="fa-bounce" icon={faUserPlus} />
                }
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Popover>
    </Box>
  );
};

export default SignInButton;
