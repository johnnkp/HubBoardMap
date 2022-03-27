import { createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: "todoList",
  initialState: { todolists: [] },
  reducers: {
    setTodoList: (state, action) => {
      state.todolists = action.payload;
    },
  },
});

export const todoListActions = todoListSlice.actions;
export default todoListSlice.reducer;
