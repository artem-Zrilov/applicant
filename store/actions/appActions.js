import {setUser} from "./userActions";

export const INIT_APP = "INIT_APP";
export const initApp = (state) => {

  return dispatch => {
    dispatch(setUser(state.user));
    dispatch(({
      type: INIT_APP,
      payload: state,
      light: typeof window === 'object'
    }))
  }
};