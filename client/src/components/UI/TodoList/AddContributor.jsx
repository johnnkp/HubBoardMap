import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Popover,
  List,
  Typography,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
} from "@mui/material";
import { PersonAddRounded } from "@mui/icons-material";
import axios from "axios";

const AddContributor = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [friendList, setFriendList] = useState([]);

  const handleClick = (e) => {
    console.log(e);
  };

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const getAllFriend = async () => {
      try {
        const res = await axios.get("/api/user/interaction/getFriendsList");
        console.log(res);
        if (res.data.success) {
          setFriendList(res.data.friends);
        }
      } catch (err) {
        console.log(err.response);
      }
    };
    getAllFriend();
  }, []);

  return (
    <React.Fragment>
      <IconButton color="hOrange" onClick={handleOpen}>
        <PersonAddRounded />
      </IconButton>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        onClose={handleClose}
      >
        <List sx={{ paddingX: 1, minWidth: 300 }}>
          {friendList.length > 0 ? (
            friendList.map((friend) => (
              <Box key={friend._id}>
                <ListItem
                  secondaryAction={
                    <Button
                      size="small"
                      variant="contained"
                      color="hOrange"
                      onClick={handleClick}
                    >
                      Invite
                    </Button>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>username</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    secondary={
                      <Typography fontSize="1.2em" color="primary">
                        username
                      </Typography>
                    }
                  />
                </ListItem>
              </Box>
            ))
          ) : (
            <Typography>
              You don't have friend yet, go add some friend!
            </Typography>
          )}
        </List>
      </Popover>
    </React.Fragment>
  );
};

export default AddContributor;
