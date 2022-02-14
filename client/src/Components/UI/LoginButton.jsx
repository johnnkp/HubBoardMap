import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Button,
  Grid,
  TextField,
  Typography,
  Popover,
} from "@mui/material";
import { LoginRounded } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faHeartbeat } from "@fortawesome/free-solid-svg-icons"

const LoginButton = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isOpen = Boolean(anchorEl);

  return (
    <div>
      <Button
        sx={{ maxHeight: "50%" }}
        size="medium"
        startIcon={<LoginRounded />}
        onClick={handleClick}
      >
        Log in
      </Button>
      {ReactDOM.createPortal(
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
            <Grid item xs={12} textAlign='center'>
              <Typography variant="h1" fontSize="2em">Log in</Typography>
            </Grid> 
            <Grid item xs={12} textAlign='center'>
              <TextField label="username" fullWidth/>
            </Grid> 
            <Grid item xs={12} textAlign='center'>
              <TextField label="password" fullWidth/>
            </Grid> 
            <Grid item container xs={12} textAlign='center' alignItems="center">
              <Grid item xs={6} >
                <Typography variant="h4" fontSize="1.5em">New to HubBoard?</Typography>
              </Grid>
              <Grid item xs={6} textAlign="start">
                <Button startIcon={<FontAwesomeIcon className="fa-bounce" icon={faUserPlus}/>}>Register</Button>
              </Grid>
            </Grid> 
          </Grid>
        </Popover>,
        document.getElementById("overlay-login")
      )}
    </div>
  );
};

export default LoginButton;
