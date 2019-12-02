import { SIGNIN } from "../../store/types";
const initialState = {
  user: ""
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
