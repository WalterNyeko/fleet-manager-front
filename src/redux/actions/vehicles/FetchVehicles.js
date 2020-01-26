import { FETCH_VEHICLE } from "../../store/types";
import { baseURL } from "../../../helpers/index";

export const fetchVehicles = () => dispatch => {
  const url = `${baseURL}vehicles/`;
  fetch(url, {
    method: "GET"
  })
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: FETCH_VEHICLE,
        payload: data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
