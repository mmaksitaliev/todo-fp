import React from "react";
import { Checkbox } from "antd";

export default function Header({ todo, onCompleteChange }) {
  return (
    <div className="todo__header">
      <span>{todo.title}</span>
      <span>
        <Checkbox
          checked={todo.completed}
          onChange={value => onCompleteChange(todo.id, value)}
        />
      </span>
    </div>
  );
}
