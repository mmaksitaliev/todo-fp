import React, { Component } from "react";

import TodoList from "components/TodoList/index.js";
import NewTodoButton from "components/NewTodoButton";

export default class Content extends Component {
  render() {
    let { todos, title, createTodo } = this.props;

    return (
      <div className="content">
        <div className="todo__list">
          <h3 className="content__title">{title}</h3>
          <TodoList todos={todos} />
        </div>
        <div className="new_todo">
          <NewTodoButton onClick={createTodo} />
        </div>
      </div>
    );
  }
}
