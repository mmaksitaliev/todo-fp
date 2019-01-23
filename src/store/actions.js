export const TODO_CREATE = "TODO_CREATE",
  TODO_UPDATE = "TODO_UPDATE",
  TODO_DELETE = "TODO_DELETE";

export const createTodo = todo => {
  return { type: TODO_CREATE, todo };
};

export const updateTodo = todo => {
  return { type: TODO_UPDATE, todo };
};

export const deleteTodo = id => {
  return { type: TODO_DELETE, id };
};
