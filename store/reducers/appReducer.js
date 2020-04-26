import {INIT_APP} from "../actions/appActions.js";

export const appReducer = (state = {} , action) => {
  switch (action.type) {
    case INIT_APP:
      return {...action.payload.app}
    default:
      return state;
  }
}