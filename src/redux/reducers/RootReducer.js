import LoginReducer from "../reducers/auth/Login";

import { combineReducers } from "redux";

export default combineReducers({
  loginReducer: LoginReducer
});
