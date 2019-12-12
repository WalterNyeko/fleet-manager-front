import {
  showErrorNotification,
  showSuccessNotification,
  baseURL
} from "../../../helpers";

export const addSettings = (settingsData, settings) => dispatch => {
  const url = `${baseURL}${settings}/`;
  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Token ${localStorage.getItem("fm-token")}`
    },
    body: JSON.stringify(settingsData)
  })
    .then(response => response.json())
    .then(data => {
      if (data.detail) {
        showErrorNotification(data.detail);
      } else {
        showSuccessNotification("Successfully added the settings");
      }
    })
    .catch(error => {})
    .finally(done => {});
};

export const fetchSettings = settings => dispatch => {
  const url = `${baseURL}${settings}/`;
  fetch(url, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Token ${localStorage.getItem("fm-token")}`
    }
  })
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: settings,
        payload: data
      });
    })
    .catch(error => {})
    .finally(done => {});
};
