/* eslint-disable no-undef */
import { applyMiddleware, createStore, compose } from 'redux'
import reduxThunk from 'redux-thunk'

import { rootReducer } from 'store/reducers'

let composeEnhancers = compose

if (window.__DEV__ || process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(reduxThunk)),
)
