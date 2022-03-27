import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";

const TodoList = ({ todolists }) => {
  if (todolists.length > 0) {
    return todolists.map((todolist) => (
      <Card
        key={todolist.title}
        variant="outlined"
        sx={{
          width: "80%",
          margin: 2,
          borderColor: "hOrange.main",
          borderWidth: 2,
        }}
      >
        <CardContent>
          <Typography variant="h1" fontSize="2em">
            {todolist.title}
          </Typography>
          <Typography variant="h2" fontSize="1.25em">
            {todolist.description}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton color="hOrange">
            <AddCircle />
          </IconButton>
        </CardActions>
      </Card>
    ));
  }
  return null;
};

export default TodoList;
