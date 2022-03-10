import {
  Box,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { EventNoteRounded, TagRounded, SyncRounded } from "@mui/icons-material";
import React from "react";
import { Wrapper } from "../../Helpers";

// INFO: width for the sidebar
const sidebarWidth = 240;
// INFO: Icon array easy for index access
const icon = [<EventNoteRounded/>, <TagRounded/>, <SyncRounded/>];

const SideBar = () => {
  return (
    <Wrapper>
      <Drawer
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: sidebarWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Note", "Tag", "Sync"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon sx={{color: "hOrange.main"}}>{icon[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Wrapper>
  );
};

export default SideBar;
