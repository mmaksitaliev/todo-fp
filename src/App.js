import React, { Component } from "react";
import { Provider } from "react-redux";

import Routes from "components/Routes";
import MainPage from "pages/MainPage";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faCoffee, faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faCheck, faCoffee, faPlus);

export const routes = [
  { path: "/all", label: "All", component: MainPage },
  { path: "/today", label: "Today", component: MainPage },
  { path: "/upcoming", label: "Upcoming", component: MainPage },
  { path: "/completed", label: "Completed", component: MainPage },
];

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes routes={routes} defRouteIndex={1} />
      </Provider>
    );
  }
}

export default App;
