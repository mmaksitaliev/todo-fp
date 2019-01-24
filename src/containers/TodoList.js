import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

import TodoList from "components/TodoList";
import * as TodoService from "domain/TodoService";

class TodoListContainer extends Component {
  render() {
    let {
      todos,
      location: { hash }
    } = this.props;

    todos = TodoService.filterByHash(hash, todos);

    return <TodoList todos={todos} />;
  }
}

const mapStateToProps = ({ todos }) => ({
  todos
});

const connected = connect(
  mapStateToProps,
  null
);

export default compose(
  withRouter,
  connected
)(TodoListContainer);
