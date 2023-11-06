import { combineReducers } from "redux";
import { loginSlice } from "./login.slice";
import { userSlice } from "./user.slice";

export default combineReducers({
  loginSlice,
  userSlice,
});
