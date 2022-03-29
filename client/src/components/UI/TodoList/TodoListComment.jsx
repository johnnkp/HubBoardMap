import React from "react";
import {
  Avatar,
  Box,
  Button,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { useDispatch } from "react-redux";
import { todoListActions } from "../../../store/slice/todo";

const TodoListComment = (props) => {
  const dispatch = useDispatch();
  const todolist = props.todolist;
  const { comments } = todolist;

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    onSubmit: async (values, action) => {
      try {
        const res = await axios.post("/api/user/todolist/comment/addComment", {
          todolistId: todolist._id,
          content: values.content,
        });
        if (res.data.success) {
          dispatch(todoListActions.renewCheckBox(res.data.todolist));
        }
      } catch (err) {
        console.log(err.response);
      }
    },
  });

  return (
    <Box width="100%" p={2}>
      <Typography>Comments</Typography>
      <List p={2}>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <ListItem>
              <ListItemAvatar>
                <Avatar alt={comment.sender.username}>
                  {comment.sender.username}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={comment.sender.username}
                secondary={
                  <React.Fragment>
                    <Typography>{comment.content}</Typography>
                    <Typography>{comment.time}</Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          ))
        ) : (
          <Typography textAlign="center" color="grey.500">
            No Comment yet...
          </Typography>
        )}
      </List>
      <Box
        display="flex"
        alignItems="center"
        gap={2}
        mt={4}
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <TextField
          placeholder="Comment here!"
          id="content"
          name="content"
          type="text"
          value={formik.values.content}
          onChange={formik.handleChange}
          error={formik.touched.content && Boolean(formik.errors.content)}
          helperText={formik.touched.content && formik.errors.content}
        />
        <Button variant="contained" color="hOrange" type="submit">
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default TodoListComment;
