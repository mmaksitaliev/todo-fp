import React from 'react'

import { Todo } from 'domain/Todo'
import { CreateForm } from './CreateForm'
import { UpdateForm } from './UpdateForm'

type TodoFormProps = {
  onHide: () => void
  todo?: Todo
}

export const TodoForm = ({ todo, onHide }: TodoFormProps) =>
  todo ? (
    <UpdateForm onHide={onHide} todo={todo} />
  ) : (
    <CreateForm onHide={onHide} />
  )
