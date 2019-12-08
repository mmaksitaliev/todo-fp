import { Todo, Todos } from 'domain/Todo'

export const TODO_CREATE = 'TODO_CREATE'
export const TODO_CREATE_BATCH = 'TODO_CREATE_BATCH'
export const TODO_UPDATE = 'TODO_UPDATE'
export const TODO_DELETE = 'TODO_DELETE'
export const TODO_TOGGLE_COMPLETE = 'TODO_TOGGLE_COMPLETE'

export const createTodo = (todo: Todo) => ({ type: TODO_CREATE, todo })

export const createTodos = (todos: Todos) => ({
  type: TODO_CREATE_BATCH,
  newTodos: todos,
})

export const toggleComplete = (id: string) => ({
  type: TODO_TOGGLE_COMPLETE,
  id,
})

export const updateTodo = (todo: Todo) => ({ type: TODO_UPDATE, todo })

export const deleteTodo = (id: string) => ({ type: TODO_DELETE, id })
