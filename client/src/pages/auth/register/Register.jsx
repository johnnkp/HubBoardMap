import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Container,
  Button,
  Box,
  TextField,
  Grid,
  Typography,
  Link,
  CircularProgress,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import Copyright from "../../../components/UI/Copyright";
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
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // formik initialization
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    // submition handler
    onSubmit: async (values, actions) => {
      setIsLoading(true);
      try {
        // axios post request
        const res = await axios.post("/api/auth/register", values);
        console.log(res.data);
        // push the route if success
        setTimeout(() => {
          navigate("/auth/mailsuccess");
        }, 2000);
      } catch (err) {
        setIsLoading(false);
        console.log(err.response.data);
        const errorMsg = err.response.data.message;
        alert(errorMsg);
        actions.resetForm();
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
        <Typography sx={{ color: "hOrange.main" }} component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="hOrange"
            endIcon={isLoading ? null : <SendIcon />}
          >
            {isLoading ? (
              <CircularProgress color="grey" size="1.5em" />
            ) : (
              "Sign up"
            )}
          </Button>
        </Box>
      </Box>
      <Typography align="center">
        <Link component={RouterLink} to="/" color="hOrange.main">
          Back To Home Page
        </Link>
      </Typography>
      <Copyright className={classes.w3_slide_bottom_07s} sx={{ mt: 5 }} />
    </Container>
  );
};

export default Register;
