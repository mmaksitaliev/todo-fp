import { applyMiddleware, createStore, compose } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";

let composeEnhancers = compose;

// eslint-disable-next-line no-underscore-dangle
if (window.__DEV__ || process.env.NODE_ENV === "development") {
  // eslint-disable-next-line no-underscore-dangle
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;
