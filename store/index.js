import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'

export default initialState => {
  const store = createStore(
   rootReducer,
   initialState,
   composeWithDevTools(applyMiddleware(thunk))
  )

  // IF REDUCERS WERE CHANGED, RELOAD WITH INITIAL STATE
  if (module.hot) {
    module.hot.accept('./reducers/rootReducer', () => {
      const createNextReducer = require('./reducers/rootReducer').default

      store.replaceReducer(createNextReducer(initialState))
    })
  }

  return store
}