import React from "react";
import { Button } from "antd";

export default function NewTodoButton({ onClick }) {
  const withoutEvent = _ => {
    onClick();
  };
  return (
    <Button
      type="primary"
      shape="round"
      icon="plus"
      size={"large"}
      onClick={withoutEvent}>
      New Todo
    </Button>
  );
}
