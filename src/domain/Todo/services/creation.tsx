import { v1 } from 'uuid'

import { currentTimeFomatted, formatDate } from 'utils'
import { Routine } from 'domain/Routine'
import { Todo } from '..'

type CreateParameters = {
  title: string
  comment: string
  deadline: string
  completed?: boolean
  tags?: Array<string>
}

export function create({
  title,
  comment,
  deadline,
  tags = [],
  completed = false,
}: CreateParameters) {
  title = title || 'Default title'
  const date = (deadline && formatDate(deadline)) || ''
  return {
    id: v1(),
    title,
    comment,
    deadline: date,
    tags,
    completed,
    dateCreated: currentTimeFomatted(),
  }
}

export function update(oldId: string, todo: Todo) {
  const date = (todo.deadline && formatDate(todo.deadline)) || ''
  return {
    ...todo,
    deadline: date,
    id: oldId,
  }
}

export function createFromRoutine({ title, comment }: Routine) {
  const deadline = currentTimeFomatted()
  return create({
    title,
    comment,
    deadline,
  })
}
