import LoginReducer from "../reducers/auth/Login";
import SettingsReducer from "../reducers/settings/SettingsReducer";

import { combineReducers } from "redux";

export default combineReducers({
  loginReducer: LoginReducer,
  settingsReducer: SettingsReducer
});
