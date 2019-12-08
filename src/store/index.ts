import { applyMiddleware, createStore, compose } from 'redux'
import reduxThunk from 'redux-thunk'

import { rootReducer } from 'store/reducers'

let composeEnhancers = compose

// eslint-disable-next-line
// @ts-ignore
if (window.__DEV__ || process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  // @ts-ignore
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk)),
)
