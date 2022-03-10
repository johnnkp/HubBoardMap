import React from "react";
import { Card, Grid, Container} from "@mui/material";
import { useSelector } from "react-redux";
import { Wrapper } from "../../Helpers";

const TodoItems = () => {
  const { todoList } = useSelector((state) => state.todoList);

  return (
    <Grid container gap={4} my={4}>
      {todoList.slice(0, 10).map((todoItem) => (
        <Grid container item xs={12} key={todoItem.id}>
            <Grid item xs={3} />
            <Grid item xs={6}>
              <Card sx={{ bgcolor: "primary.main" }}>
                <h1>Title: {todoItem.title}</h1>
              </Card>
            </Grid>
            <Grid item xs={3} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TodoItems;
