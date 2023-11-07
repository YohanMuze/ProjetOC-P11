import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Thunks middleware
export const login = createAsyncThunk("user/login", async (userID) => {
  const response = await axios
    .post("http://localhost:3001/api/v1/user/login", {
      email: userID.email,
      password: userID.password,
    })
    .then((res) => {
      const token = res.data.body.token;
      sessionStorage.setItem("userToken", token);
      return token;
    });
  return response;
});

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLog: false,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.isLog = false;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isLog = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.isLog = false;
        if (action.error.status === 400) {
          state.error = "Acces Denied";
        } else {
          state.error = action.error.message;
        }
      });
  },
});
