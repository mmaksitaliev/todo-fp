import React from 'react'
import PropTypes from 'prop-types'
import { List, Checkbox, Icon, Popconfirm } from 'antd'

import { Header } from 'components/ListItemHeader'
import { DangerIcon } from 'components/Icons'

export function TodoListFC({
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
  )
}

TodoListFC.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
}

function TodoItem({ todo, toggleComplete, onEditClick, onRemoveClick }) {
  const actions = [
    <Checkbox
      key={'checkbox'}
      checked={todo.completed}
      onChange={() => toggleComplete(todo.id)}
    />,
    <Icon key='edit-icon' type='edit' onClick={() => onEditClick(todo)} />,
    <Popconfirm
      key='delete-confirm'
      title='Are you sure delete this todo?'
      onConfirm={() => onRemoveClick(todo.id)}
      okText='Yes'
      cancelText='No'
    >
      <DangerIcon type='delete' />
    </Popconfirm>,
  ]
  return (
    <List.Item actions={actions}>
      <List.Item.Meta
        title={<Header title={todo.title} />}
        description={todo.comment}
      />
    </List.Item>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
}
