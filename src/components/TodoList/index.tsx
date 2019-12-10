import React from 'react'
import { List } from 'antd'

import { Todos, Todo } from 'domain/Todo'
import { TodoItem } from './Item'

export type TodoListProps = {
  todos: Todos
  toggleComplete: (id: string) => void
  onEditClick: (todo: Todo) => void
  onRemoveClick: (id: string) => void
}

export function TodoList({
  todos,
  toggleComplete,
  onEditClick,
  onRemoveClick,
}: TodoListProps) {
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
