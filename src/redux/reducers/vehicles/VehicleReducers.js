import {
  ADD_VEHICLE,
  FETCH_VEHICLE,
  ADD_VEHICLE_SUMMARY
} from "../../store/types";
const initialState = {
  vehicle: "",
  vehicles: [],
  vehicleSummary: ""
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_VEHICLE:
      return {
        ...state,
        vehicle: action.payload
      };
    case FETCH_VEHICLE:
      return {
        ...state,
        vehicles: action.payload
      };
    case ADD_VEHICLE_SUMMARY:
      return {
        ...state,
        vehicleSummary: action.payload
      };
    default:
      return state;
  }
};
