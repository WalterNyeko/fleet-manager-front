import { ADD_VEHICLE_SUMMARY } from "../../store/types";
import {
  baseURL,
  showErrorNotification,
  showSuccessNotification
} from "../../../helpers/index";

export const addVehicleSummary = vehicleSummaryInfo => dispatch => {
  const url = `${baseURL}vehiclesummary/`;
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(vehicleSummaryInfo)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.id) {
        showSuccessNotification("Successfully added vehicle summary");
        dispatch({
          type: ADD_VEHICLE_SUMMARY,
          payload: data
        });
      } else {
        showErrorNotification("Failed to add vehicle summary");
      }
    })
    .catch(err => {
      console.log(err);
    });
};
