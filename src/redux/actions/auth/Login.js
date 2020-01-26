import history from "../../../containers/configs/history";
import {
  baseURL,
  showErrorNotification,
  showSuccessNotification
} from "../../../helpers/index";
export const signIn = userInfo => dispatch => {
  console.log(userInfo);
  const url = `${baseURL}auth/login/`;
  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(userInfo)
  })
    .then(response => response.json())
    .then(data => {
      if (data.token) {
        showSuccessNotification("You have successfully LogedIn");
        localStorage.setItem("fm-token", data.token);
        history.push("/home");
      } else {
        console.log(data);
        showErrorNotification("Login Failed");
      }
    })
    .catch(error => {})
    .finally(done => {});
};
export const signUp = userInfo => dispatch => {
  const url = `${baseURL}auth/register/`;
  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(userInfo)
  })
    .then(response => response.json())
    .then(data => {
      if (data.token) {
        showSuccessNotification("You have successfully registered");
        localStorage.setItem("fm-token", data.token);
        history.push("/home");
      } else {
        showErrorNotification("Registration failed");
      }
    })
    .catch(error => {})
    .finally(done => {});
};
