import LoginReducer from "../reducers/auth/Login";
import SettingsReducer from "../reducers/settings/SettingsReducer";
import AddVehicleReducer from "../reducers/vehicles/VehicleReducers"

import { combineReducers } from "redux";

export default combineReducers({
  loginReducer: LoginReducer,
  settingsReducer: SettingsReducer,
  vehicleReducer: AddVehicleReducer
});
