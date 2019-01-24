import React, { Component } from "react";

import TodoList from "components/TodoList";

export default class Content extends Component {
  render() {
    let { todos, title } = this.props;

    return (
      <div className="content">
        <h3 className="content__title">{title}</h3>
        <TodoList todos={todos} />
      </div>
    );
  }
}
