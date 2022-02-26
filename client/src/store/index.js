import { configureStore, createSlice } from "@reduxjs/toolkit";

// INFO: import reducers
import { authReducer } from "./slice";

// INFO: sample code to create slice
// const sampleSlice = createSlice({
//   name: "testing",
//   initialState: {},
//   reducers: {
//     test1(state, action) {},
//     test2(state, action) {},
//     test3(state, action) {},
//     // ...
//   },
// });

const store = configureStore({
  reducer: { auth: authReducer },
});

export default store;
