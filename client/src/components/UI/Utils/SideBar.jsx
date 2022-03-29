import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Drawer,
  ListItem,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import {
  EventNoteRounded,
  SyncRounded,
  TagRounded,
  AccountBoxRounded,
  AdminPanelSettingsRounded,
  SettingsRounded,
} from "@mui/icons-material";
import classes from "../../../styles/global.module.css";
// KDE Breeze Icons 5.90
// import userInfoIcon from "../../../image/user_info_100.svg";
// import adminIcon from "../../../image/system-users-50.svg";

// INFO: width for the sidebar
const sidebarWidth = 240;

const SideBar = (props) => {
  // INFO: Icon array easy for index access
  let items = props.profilepage
    ? ["Profile", "Change Password", "Admin Management"]
    : ["Note", "Tag", "Sync"];
  let icons = props.profilepage
    ? [
        <AccountBoxRounded />,
        <SettingsRounded />,
        <AdminPanelSettingsRounded />,
      ]
    : [<EventNoteRounded />, <TagRounded />, <SyncRounded />];

  // if (props.items === "account") {
  //   item = ["Profile", "Change Password", "Admin Management"];
  //   icon = [<Icon>
  //     <img height="100%" src={userInfoIcon} alt="Profile" title="Profile"/>
  //   </Icon>,
  //     <Key/>,
  //     <Icon>
  //       <img height="100%" src={adminIcon} alt="Admin Management" title="Admin Management"/>
  //     </Icon>
  //   ];
  // }

  return (
    <Box>
      <Drawer
        sx={{
          width: sidebarWidth,
          display: ["block", "none"],
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: sidebarWidth,
            boxSizing: "border-box",
          },
        }}
        ModalProps={{ keepMounted: true }}
        open={props.drawerOpen}
        onClose={props.handleDrawerOpen}
        variant="temporary"
        anchor="left"
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {items.map((text, index) => (
              <ListItemButton
                key={text}
                component={RouterLink}
                to={`/hubboard/${text.replace(/\s/g, "")}`}
                sx={{ color: "hOrange.main" }}
              >
                <ListItemIcon sx={{ color: "hOrange.main" }}>
                  {icons[index]}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: "black" }} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
      <Drawer
        sx={{
          width: sidebarWidth,
          display: ["none", "block"],
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: sidebarWidth,
            boxSizing: "border-box",
          },
        }}
        ModalProps={{ keepMounted: true }}
        open={props.drawerOpen}
        onClose={props.handleDrawerOpen}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {items.map((text, index) => (
              <ListItemButton
                key={text}
                component={RouterLink}
                to={`/hubboard/${text.replace(/\s/g, "")}`}
                sx={{ color: "hOrange.main" }}
              >
                <ListItemIcon sx={{ color: "hOrange.main" }}>
                  {icons[index]}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: "black" }} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideBar;
