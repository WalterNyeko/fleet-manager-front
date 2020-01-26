import { ADD_VEHICLE } from "../../store/types";
import {
  baseURL,
  showErrorNotification,
  showSuccessNotification
} from "../../../helpers/index";

export const addVehicle = vehicleInfo => dispatch => {
  const url = `${baseURL}vehicles/`;
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(vehicleInfo)
  })
    .then(response => response.json())
    .then(data => {
      if (data.id) {
        showSuccessNotification("Successfully added vehicle");
        dispatch({
          type: ADD_VEHICLE,
          payload: data
        });
      } else {
        showErrorNotification("Failed to add vehicle");
      }
    })
    .catch(err => {
      console.log(err);
    });
};
