import React from 'react'
import initializeStore from '../store'

const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

function getOrCreateStore(initialState) {
  if (typeof window === 'undefined') {
    return initializeStore(initialState)
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState)
  }
  return window[__NEXT_REDUX_STORE__]
}

export default App => {
  return class AppWithRedux extends React.Component {
    static async getInitialProps(appContext) {

      const store = getOrCreateStore()
      appContext.ctx.store = store

      return {
        ...(App.getInitialProps ? await App.getInitialProps(appContext) : {}),
        initialReduxState: store.getState(),
      }
    }

    render() {
      const { initialReduxState } = this.props
      return <App {...this.props} store={getOrCreateStore(initialReduxState)} />
    }
  }
}