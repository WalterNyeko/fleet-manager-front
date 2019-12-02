import { SIGNIN } from "../../store/types";
export const signIn = userInfo => dispatch => {
  const url = `auth/login`;
  dispatch({
    type: "",
    payload: true
  });
  fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(userInfo)
  })
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: SIGNIN,
        payload: data
      });
    })
    .catch(error => {})
    .finally(done => {});
};
