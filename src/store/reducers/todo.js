import { TODO_CREATE, TODO_UPDATE, TODO_DELETE } from "../actions";
import createReducer from "./createReducer";
import { curry, equalBy, loggerHOF } from "../../utils";

const equalById = curry(equalBy)("id");

export const intialState = [{ id: 1, goal: "Learn FP" }];

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
  [TODO_UPDATE]: loggerHOF(updateTodo),
  [TODO_DELETE]: deleteTodo
};

export default createReducer(intialState, handlers);
