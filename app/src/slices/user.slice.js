import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserDatas = createAsyncThunk("user/datas", async (id) => {
  const bearerToken = `Bearer ${id}`;
  const d = "";
  const response = await axios
    .post("http://localhost:3001/api/v1/user/profile", d, {
      headers: { Authorization: bearerToken },
    })
    .then((res) => {
      const datas = res.data.body;
      return datas;
    });
  return response;
});

export const editUserName = createAsyncThunk(
  "user/edit-user-name",
  async (datas) => {
    const { token, newUserName } = datas;
    const bearerToken = `Bearer ${token}`;
    const d = {
      userName: `${newUserName}`,
    };
    const response = await axios
      .put("http://localhost:3001/api/v1/user/profile", d, {
        headers: { Authorization: bearerToken },
      })
      .then((res) => {
        if (res.status === 200) {
          return newUserName;
        } else return;
      });
    return response;
  },
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
    userName: "",
    loading: false,
    error: null,
    editIsOpen: false,
  },
  reducers: {
    toggleEditName: (state) => {
      state.editIsOpen = !state.editIsOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      //FETCH USER DATAS
      .addCase(getUserDatas.pending, (state) => {
        state.loading = true;
        state.firstName = "";
        state.lastName = "";
        state.userName = "";
        state.error = null;
      })
      .addCase(getUserDatas.fulfilled, (state, action) => {
        state.loading = false;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.userName = action.payload.userName;
        state.error = null;
      })
      .addCase(getUserDatas.rejected, (state, action) => {
        state.loading = false;
        state.firstName = "";
        state.lastName = "";
        state.userName = "";
        if (action.error.status === 400) {
          state.error = "Acces Denied";
        } else {
          state.error = action.error.message;
        }
      })
      //EDIT USER NAME
      .addCase(editUserName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editUserName.fulfilled, (state, action) => {
        state.loading = false;
        state.userName = action.payload;
        state.error = null;
      })
      .addCase(editUserName.rejected, (state, action) => {
        state.loading = false;
        if (action.error.status === 400) {
          state.error = "Acces Denied";
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export const { toggleEditName, editUN } = userSlice.actions;
