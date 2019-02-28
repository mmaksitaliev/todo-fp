import React from 'react';
import PropTypes from 'prop-types';
import { List, Checkbox, Icon } from 'antd';
import Header from 'components/ListItemHeader';
import { DangerIcon } from 'components/Icons';

export default function TodoList({
  todos,
  toggleComplete,
  onEditClick,
  onRemoveClick,
}) {
  return (
    <List
      className='todo__list'
      itemLayout='horizontal'
      dataSource={todos}
      renderItem={todo => (
        <TodoItem
          todo={todo}
          toggleComplete={toggleComplete}
          onRemoveClick={onRemoveClick}
          onEditClick={onEditClick}
        />
      )}
    />
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

function TodoItem({ todo, toggleComplete, onEditClick, onRemoveClick }) {
  const actions = [
    <Checkbox
      key={'checkbox'}
      checked={todo.completed}
      onChange={() => toggleComplete(todo.id)}
    />,
    <Icon key='edit-icon' type='edit' onClick={() => onEditClick(todo)} />,
    <DangerIcon
      key='delete-icon'
      type='delete'
      onClick={() => onRemoveClick(todo.id)}
    />,
  ];
  return (
    <List.Item actions={actions}>
      <List.Item.Meta
        title={<Header title={todo.title} />}
        description={todo.comment}
      />
    </List.Item>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};
