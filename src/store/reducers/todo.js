import { TODO_CREATE, TODO_UPDATE, TODO_DELETE } from "store/actions";
import createReducer from "./createReducer";
import { curry, equalBy } from "utils";
import * as TodoService from "domain/TodoService";

const equalById = curry(equalBy)("id");

function fromNow(days) {
  const today = new Date();
  today.setDate(today.getDate() + days);
  return today;
}

export const intialState = [
  TodoService.create("Learn JS", fromNow(10)),
  TodoService.create("Learn FP", fromNow(20)),
  TodoService.create("Learn React", fromNow(30)),
  TodoService.create("Build Todo App", fromNow(0)),
  TodoService.create("Have fun", fromNow(0), null, true)
];

function createTodo(todos, { todo }) {
  return todos.concat([todo]);
}

function updateTodo(todos, { todo: toUpdate }) {
  const newTodos = todos.slice();
  const index = newTodos.findIndex(equalById(toUpdate.id));
  if (index !== -1) newTodos[index] = toUpdate;
  return newTodos;
}

function deleteTodo(todos, { id }) {
  return todos.filter(todo => todo.id !== id);
}

const handlers = {
  [TODO_CREATE]: createTodo,
  [TODO_UPDATE]: updateTodo,
  [TODO_DELETE]: deleteTodo
};

export default createReducer(intialState, handlers);
