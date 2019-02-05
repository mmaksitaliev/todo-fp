import React from "react";
import { List } from "antd";
import Header from "./Header";

export default function TodoList({ todos, toggleComplete }) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={todos}
      renderItem={todo => (
        <List.Item>
          <List.Item.Meta
            title={<Header todo={todo} onCompleteChange={toggleComplete} />}
            description={todo.description || "some description"}
          />
        </List.Item>
      )}
    />
  );
}
