import {SET_USER} from "../actions/userActions";

export default (state = false , action) => {
  switch(action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
}