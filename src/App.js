import React, { Component } from "react";

import { Provider } from "react-redux";
import MainPage from "containers/MainPage";
import store from "./store";
import Routes from "./components/Routes";

export const routes = [
  { path: "/all", label: "All", component: MainPage },
  { path: "/today", label: "Today", component: MainPage },
  { path: "/upcoming", label: "Upcoming", component: MainPage },
  { path: "/completed", label: "Completed", component: MainPage }
];

class App extends Component {
  render() {
    const defaultPath = routes[1].path;
    return (
      <Provider store={store}>
        <Routes routes={routes} defaultPath={defaultPath} />
      </Provider>
    );
  }
}

export default App;
