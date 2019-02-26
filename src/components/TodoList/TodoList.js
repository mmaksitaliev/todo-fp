import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import Header from 'components/HeaderWithCheckbox';

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default function TodoList({ todos, toggleComplete }) {
  return (
    <List
      className='todo__list'
      itemLayout='horizontal'
      dataSource={todos}
      renderItem={todo => (
        <List.Item>
          <List.Item.Meta
            title={
              <Header
                id={todo.id}
                title={todo.title}
                checked={todo.completed}
                onChange={toggleComplete}
              />
            }
            description={todo.description}
          />
        </List.Item>
      )}
    />
  );
}
