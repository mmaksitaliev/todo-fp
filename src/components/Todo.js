import React from "react";

export default function Todo({ todo }) {
  return (
    <li>
      <div className="todo__item">
        <p>{todo.goal}</p>
      </div>
    </li>
  );
}
