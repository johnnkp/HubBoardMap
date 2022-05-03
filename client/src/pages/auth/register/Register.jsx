/* PROGRAM Register.jsx - Register page
 * PROGRAMMER: johnnkp and SzelamC
 * VERSION 1: written 31-03-2022
 * Revision 1.1: 03-05-2022 code clean up
 * PURPOSE: Create Yup input field and register page.
 * DATA STRUCTURE:
 * import React, useState - react
 * import Link, useNavigate - react-router-dom
 * import useSelector - react-redux
 * import Box, Button, CircularProgress, Container, Grid, Link,
 *        TextField, Typography - @mui/material
 * import SendIcon - @mui/icons-material/Send
 * import GoogleIcon - @mui/icons-material/Google
 * import axios
 * import useFormik - formik
 * import yup
 * import Copyright - copyright module
 * import classes - global style css
 * Variable validationSchema - yup.object
 * Variable Register - export default const
 *
 * TEST CODE:
 * console.log(useremail); - output user email to web console
 * const intViewportWidth = window.innerWidth; - get window width
 * <p>intViewportWidth: {intViewportWidth}</p> - output window width to page
 * useMediaQuery: min-width = window.innerWidth
*/

import React, {useState} from "react";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Link,
  TextField,
  Typography
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import GoogleIcon from "@mui/icons-material/Google";
import axios from "axios";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Copyright} from "../../../components/UI";
import classes from "../../../styles/global.module.css";

// create validation schema
const validationSchema = Yup.object({
  username: Yup.string("Enter your username")
    .min(3, "Username should be of minimum 3 character")
    .required("Username is required"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("Enter your password")
    .min(6, "Password should be of minimum 6 character")
    .required("Password is required"),
});

const Register = () => {
  const useremail = useSelector((state) => state.auth.useremail);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // INFO: formik initialization
  const formik = useFormik({
    initialValues: {
      username: "",
      email: useremail ? useremail : "",
      password: "",
    },
    validationSchema: validationSchema,
    // INFO: sign up submition handler
    onSubmit: async (values, actions) => {
      setIsLoading(true);
      try {
        // INFO: axios post request
        const res = await axios.post("/api/auth/register", values);
        // INFO: push the route if success
        setTimeout(() => {
          navigate("/auth/mailsuccess");
        }, 2000);
      } catch (err) {
        setIsLoading(false);
        console.log(err.response.data);
        const errorMsg = err.response.data.message;
        alert(errorMsg);
      }
    },
  });

  return (
    <Container
      component="main"
      maxWidth="xs"
      className={classes.w3_slide_bottom}
    >
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{color: "hOrange.main"}} variant="h4">
          Sign up
        </Typography>

        <Box component="form" onSubmit={formik.handleSubmit} sx={{mt: 3}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="Password"
                id="password"
                autoComplete="new-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
          </Grid>

          <Grid item container spacing={2} sx={{mt: 2, mb: 2}}>
            <Grid item xs={12} md={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="hOrange"
                endIcon={isLoading ? null : <SendIcon/>}
              >
                {isLoading ? (
                  <CircularProgress color="grey" size="1.5em"/>
                ) : (
                  "Sign up"
                )}
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                fullWidth
                variant="contained"
                color="hOrange"
                endIcon={<GoogleIcon/>}
                href="http://localhost:3001/api/auth/google"
              >
                Google Login
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Typography className={classes.w3_slide_bottom_07s} align="center">
        <Link component={RouterLink} to="/" color="hOrange.main">
          Back To Home Page
        </Link>
      </Typography>
      <Copyright className={classes.w3_slide_bottom_07s} sx={{mt: 5}}/>
    </Container>
  );
};

export default Register;
