export const TODO_CREATE = 'TODO_CREATE';

const TODO_UPDATE = 'TODO_UPDATE';

const TODO_DELETE = 'TODO_DELETE';

const TODO_TOGGLE_COMPLETE = 'TODO_TOGGLE_COMPLETE';

export const createTodo = todo => ({ type: TODO_CREATE, todo });

export const toggleComplete = id => ({
  type: TODO_TOGGLE_COMPLETE,
  id,
});

export const updateTodo = todo => ({ type: TODO_UPDATE, todo });

export const deleteTodo = id => ({ type: TODO_DELETE, id });
