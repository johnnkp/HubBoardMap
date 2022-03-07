import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {AppBar, Container, Toolbar} from "@mui/material";
import { authActions } from "../../../store/slice/auth";

const Mainpage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.post("/api/user/logout");
      if (res.data.success) {
        dispatch(authActions.logout());
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (err) {
      console.log(err.response);
    }
  };
  return (
    <div>
      <AppBar color="hOrange">
        <Container>
          <Toolbar>

          </Toolbar>
        </Container>
      </AppBar>
      <Container sx={{position: "relative", top: 50}}>
        <h1>You in mainpage</h1>
        <button onClick={logoutHandler}>Logout</button>
	  </Container>
    </div>
  );
};

export default Mainpage;
