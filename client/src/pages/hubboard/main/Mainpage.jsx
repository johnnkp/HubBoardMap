import React from "react";
import { AppBar, Container, Toolbar } from "@mui/material";

const Mainpage = () => {
  return (
    <div>
      <AppBar color="hOrange">
        <Container>
          <Toolbar></Toolbar>
        </Container>
      </AppBar>
      <Container sx={{ position: "relative", top: 50 }}>
        <h1>You in mainpage</h1>
        <button onClick={logoutHandler}>Logout</button>
      </Container>
    </div>
  );
};

export default Mainpage;
