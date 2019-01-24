import React, { Component } from "react";
import NavList from "components/NavList";
import TodoListContainer from "./TodoList";

export default class TodosPage extends Component {
  links = [
    { path: "#all", label: "All" },
    { path: "#today", label: "Today" },
    { path: "#upcoming", label: "Upcoming" },
    { path: "#completed", label: "Completed" }
  ];

  render() {
    return (
      <div>
        <NavList links={this.links} />
        <TodoListContainer />
      </div>
    );
  }
}
