import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos }) {
  return (
    <ul className="todo__list">
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
