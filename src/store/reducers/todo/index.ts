import { createSlice, PayloadAction, CaseReducer } from '@reduxjs/toolkit'

import { create, Todos, Todo } from 'domain/Todo'
import { fromNow } from 'utils'

export const initialState: Todos = [
  create({
    title: 'Have fun [YESTERDAY]',
    comment: '',
    deadline: fromNow(-2).toISOString(),
    completed: true,
  }),

  create({
    title: 'Learn JS',
    comment: '',
    deadline: fromNow(10).toISOString(),
  }),

  create({
    title: 'Learn FP',
    comment: '',
    deadline: fromNow(20).toISOString(),
  }),

  create({
    title: 'Learn React',
    comment: '',
    deadline: fromNow(30).toISOString(),
  }),

  create({
    title: 'Build Todo App',
    comment: '',
    deadline: fromNow(0).toISOString(),
  }),

  create({
    title: 'Have fun',
    comment: '',
    deadline: fromNow(0).toISOString(),
    completed: true,
  }),
]

const createTodo: CaseReducer<Todos, PayloadAction<Todo>> = (
  state,
  { payload },
) => {
  return state.concat([payload])
}

const createTodos: CaseReducer<Todos, PayloadAction<Todos>> = (
  state,
  { payload },
) => {
  return state.concat(payload)
}

const toggleComplete: CaseReducer<Todos, PayloadAction<string>> = (
  state,
  { payload },
) => {
  return state.map(todo => {
    if (todo.id === payload) todo.completed = !todo.completed
    return todo
  })
}

const updateTodo: CaseReducer<Todos, PayloadAction<Todo>> = (
  state,
  { payload },
) => {
  return state.map(todo => {
    if (todo.id === payload.id) return payload
    return todo
  })
}

const deleteTodo: CaseReducer<Todos, PayloadAction<string>> = (
  state,
  { payload },
) => {
  return state.filter(todo => todo.id !== payload)
}

export const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    createTodo,
    createTodos,
    toggleComplete,
    updateTodo,
    deleteTodo,
  },
})

export const todoActions = todos.actions
