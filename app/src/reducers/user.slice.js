import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//const USER_LOGIN = "USER_LOGIN";

export const login = createAsyncThunk("user/login", async (userID) => {
  console.log(userID);
  const response = await axios
    .post("http://localhost:3001/api/v1/user/login", {
      email: userID.email,
      password: userID.password,
    })
    .then((res) => {
      const token = JSON.stringify(res.data.body.token);
      localStorage.setItem("userToken", token);
      return token;
    });
  return response;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
    token: "",
  },
  reducers: {
    USER_LOGIN: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        if (action.error.status === 400) {
          state.error = "Acces Denied";
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export const { USER_LOGIN } = userSlice.actions;
