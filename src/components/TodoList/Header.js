import React from "react";
import { Checkbox } from "antd";

export default function Header({ todo, onCompleteChange }) {
  return (
    <div className="todo__header">
      <span className="todo__goal">{todo.goal}</span>
      <span className="todo__completed">
        <Checkbox
          checked={todo.completed}
          onChange={value => onCompleteChange(todo.id, value)}
        />
      </span>
    </div>
  );
}
