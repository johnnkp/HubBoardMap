import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import CheckBoxList from "./CheckBoxList";
import AddCheckBox from "./AddCheckBox";
import CommentBox from "./CommentBox";
import { useSelector } from "react-redux";
import { Close } from "@mui/icons-material";

const TodoList = () => {
  const { todolists } = useSelector((state) => state.todolists);
  console.log(todolists);
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
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h1" fontSize="2em" my={2}>
              {todolist.title}
            </Typography>
            <IconButton color="hOrange">
              <Close />
            </IconButton>
          </Box>
          <Divider />
          <Typography variant="h2" fontSize="1.25em" my={1}>
            {todolist.description}
          </Typography>
          <Divider />
          <CheckBoxList todolist={todolist} />
        </CardContent>
        <CardActions>
          <AddCheckBox todolistId={todolist._id} />
          <CommentBox todolist={todolist} />
        </CardActions>
      </Card>
    ));
  }
  return null;
};

export default TodoList;
