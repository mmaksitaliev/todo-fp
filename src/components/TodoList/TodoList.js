import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import Header from './Header';

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default function TodoList({ todos, toggleComplete }) {
  return (
    <List
      itemLayout='horizontal'
      dataSource={todos}
      renderItem={todo => (
        <List.Item>
          <List.Item.Meta
            title={<Header todo={todo} onCompleteChange={toggleComplete} />}
            description={todo.description}
          />
        </List.Item>
      )}
    />
  );
}
