import {
  showErrorNotification,
  showSuccessNotification
} from "../../../helpers";

export const addSettings = (settingsData, settings) => dispatch => {
  console.log(settings, settingsData);
  const url = `http://127.0.0.1:8000/${settings}/`;
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
