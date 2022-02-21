import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Grid,
  TextField,
  Typography,
  Popover,
  Box,
} from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import { LoginRounded } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

// create yup validation schema
const validationSchema = Yup.object({
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("Enter your password")
    .min(6, "Password should be of minimum 6 character")
    .required("Password is required"),
});

const LoginButton = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm({ email: "", password: "" });
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
                autoComplete="email"
                id="email"
                label="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} textAlign="center">
              <TextField
                required
                fullWidth
                id="password"
                label="Password"
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
                Log in
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
                sx={{boxShadow: 2}}
                LinkComponent={RouterLink}
                to="/register"
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

export default LoginButton;
