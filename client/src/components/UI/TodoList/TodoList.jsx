import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import AddCircle from "@mui/icons-material/AddCircle";

// create dummy todoList

const TodoList = ({ todoTitle, todoDetails }) => {
  return (
    <Card
      variant="outlined"
      sx={{ width: "80%", borderColor: "hOrange.main", borderWidth: 2 }}
    >
      <CardContent>
        <Typography variant="h1" fontSize="2em">
          {todoTitle}
        </Typography>
        <Typography variant="h2" fontSize="1.25em">
          {todoDetails}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton color="hOrange">
          <AddCircle />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TodoList;
