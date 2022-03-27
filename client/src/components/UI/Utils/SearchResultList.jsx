import React from "react";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const SearchResultList = ({ results }) => {
  return (
    <List
      sx={{
        color: "white",
        bgcolor: "orange",
        borderRadius: 2,
        minWidth: 268,
        maxWidth: 360,
        position: "absolute",
        transformOrigin: "top",
        top: "100%",
        zIndex: (theme) => theme.zIndex.appbar + 1,
        overflow: "hidden",
      }}
    >
      {results.length > 0 ? (
        results.map((result) => (
          <ListItem
            key={result.name}
            secondaryAction={
              <IconButton edge="end">
                <AddIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>{result.name}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={result.name} />
          </ListItem>
        ))
      ) : (
        <ListItem>
          <ListItemText primary="No result found" />
        </ListItem>
      )}
    </List>
  );
};

export default SearchResultList;
