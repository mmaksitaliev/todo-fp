import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodosPage from "./containers/TodosPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/todos" component={TodosPage} />
        </div>
      </Router>
    );
  }
}

export default App;
