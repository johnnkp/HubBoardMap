import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import AddToDoList from "./AddToDoList";
import TodoList from "./TodoList";

// dummy TODO List
const dummyTodoList = {
  todoTitle: "This is Title",
  todoDetails: "This is Details",
};

const TodoItems = () => {
  const { todoList } = useSelector((state) => state.todoList);
  return (
    <Grid container justifyContent="center" my={8}>
      <Grid item container xs={12} mb={8}>
        <Grid item xs={0} sm={1} md={3} />
        <Grid item xs={12} sm={10} md={6}>
          <AddToDoList />
        </Grid>
        <Grid item xs={0} sm={1} md={3} />
      </Grid>
      <Grid item container xs={12} justifyContent="center" width="100%">
        <TodoList {...dummyTodoList} />
      </Grid>
    </Grid>
  );
};

export default TodoItems;
