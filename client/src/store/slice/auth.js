import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authenticate",
  initialState: { isAuthenticated: false },
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
    },
    logout(state, action) {
      state.isAuthenticated = false;
    },
  },
});

// INFO: export auth action and reducer
export const authActions = authSlice.actions;
export default authSlice.reducer;
