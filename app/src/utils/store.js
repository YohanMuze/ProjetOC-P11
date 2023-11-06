import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../slices/user.slice";
import { loginSlice } from "../slices/login.slice";

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    user: userSlice.reducer,
  },
  devTools: true,
});
