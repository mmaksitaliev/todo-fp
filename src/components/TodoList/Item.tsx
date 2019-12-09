import React from 'react'
import { List, Checkbox, Icon, Popconfirm } from 'antd'

import { DangerIcon } from 'components/Icons'
import { Header } from 'components/ListItemHeader'
import { Todo } from 'domain/Todo'
import { TodoListProps } from '.'

type TodoItemProps = {
  todo: Todo
} & Pick<TodoListProps, 'onEditClick' | 'onRemoveClick' | 'toggleComplete'>

export function TodoItem({
  todo,
  toggleComplete,
  onEditClick,
  onRemoveClick,
}: TodoItemProps) {
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
