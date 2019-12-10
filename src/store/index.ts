import { applyMiddleware, createStore, compose } from 'redux'
import reduxThunk from 'redux-thunk'

import { rootReducer } from 'store/reducers'
import { Todos } from 'domain/Todo'
import { Routines } from 'domain/Routine'

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

// TODO: fix with typeinference
export type RootState = {
  todos: Todos
  routines: Routines
}
