import { createReducer, fromNow } from 'utils'
import { create, Todos, Todo } from 'domain/Todo'

import {
  TODO_CREATE,
  TODO_CREATE_BATCH,
  TODO_UPDATE,
  TODO_DELETE,
  TODO_TOGGLE_COMPLETE,
} from 'store/actions/todo'

export const initialState = [
  create({
    title: 'Have fun [YESTERDAY]',
    comment: '',
    deadline: fromNow(-2).toString(),
    completed: true,
  }),

  create({
    title: 'Learn JS',
    comment: '',
    deadline: fromNow(10).toString(),
  }),

  create({
    title: 'Learn FP',
    comment: '',
    deadline: fromNow(20).toString(),
  }),

  create({
    title: 'Learn React',
    comment: '',
    deadline: fromNow(30).toString(),
  }),

  create({
    title: 'Build Todo App',
    comment: '',
    deadline: fromNow(0).toString(),
  }),

  create({
    title: 'Have fun',
    comment: '',
    deadline: fromNow(0).toString(),
    completed: true,
  }),
]

type CreateTodoAction = { todo: Todo }
type CreateTodosAction = { todos: Todos }
type ToggleCompleteAction = { id: string }
type UpdateTodoAction = { todo: Todo }
type DeleteTodoAction = { id: string }

function createTodo(state: Todos, { todo }: CreateTodoAction) {
  return state.concat([todo])
}

function createTodos(state: Todos, { todos }: CreateTodosAction) {
  return state.concat(todos)
}

function toggleComplete(state: Todos, { id }: ToggleCompleteAction) {
  return state.map(todo => {
    if (todo.id === id) todo.completed = !todo.completed
    return todo
  })
}

function updateTodo(state: Todos, { todo: toUpdate }: UpdateTodoAction) {
  return state.map(todo => {
    if (todo.id === toUpdate.id) return toUpdate
    return todo
  })
}

function deleteTodo(state: Todos, { id }: DeleteTodoAction) {
  return state.filter(todo => todo.id !== id)
}

const handlers = {
  [TODO_CREATE]: createTodo,
  [TODO_CREATE_BATCH]: createTodos,
  [TODO_UPDATE]: updateTodo,
  [TODO_DELETE]: deleteTodo,
  [TODO_TOGGLE_COMPLETE]: toggleComplete,
}

export const todos = createReducer(initialState, handlers)
