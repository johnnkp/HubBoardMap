// to-do list item module
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Grid} from "@mui/material";
import axios from "axios";
import AddToDoList from "./AddToDoList";
import TodoList from "./TodoList";
import {todoListActions} from "../../../store/slice/todo";

const TodoItems = () => {
  const dispatch = useDispatch();

  // INFO: Fetch all todo list on mount
  useEffect(() => {
    const getAllTodolists = async () => {
      try {
        const res = await axios.get("/api/user/todolist/getAllTodolists");
        dispatch(todoListActions.setTodoList(res.data.todolists));
      } catch (err) {
        // console.log(err.response);
      }
    };
    getAllTodolists();
  }, []);

  return (
    <Grid container justifyContent="center" my={8}>
      <Grid item container xs={12} mb={8}>
        <Grid item xs={0} sm={1} md={3}/>
        <Grid item xs={12} sm={10} md={6}>
          <AddToDoList/>
        </Grid>
        <Grid item xs={0} sm={1} md={3}/>
      </Grid>
      <Grid item container xs={12} justifyContent="center" width="100%">
        <TodoList/>
      </Grid>
    </Grid>
  );
};

export default TodoItems;
