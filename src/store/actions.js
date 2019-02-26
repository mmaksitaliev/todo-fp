export const TODO_CREATE = 'TODO_CREATE',
  TODO_CREATE_BATCH = 'TODO_CREATE_BATCH',
  TODO_UPDATE = 'TODO_UPDATE',
  TODO_DELETE = 'TODO_DELETE',
  TODO_TOGGLE_COMPLETE = 'TODO_TOGGLE_COMPLETE';

export const ROUTINE_CREATE = 'ROUTINE_CREATE',
  ROUTINE_UPDATE = 'ROUTINE_UPDATE',
  ROUTINE_DELETE = 'ROUTINE_DELETE';

export const createTodo = todo => ({ type: TODO_CREATE, todo });

export const createTodos = newTodos => ({ type: TODO_CREATE_BATCH, newTodos });

export const toggleComplete = id => ({
  type: TODO_TOGGLE_COMPLETE,
  id,
});

export const updateTodo = todo => ({ type: TODO_UPDATE, todo });

export const deleteTodo = id => ({ type: TODO_DELETE, id });

export const createRoutine = routine => ({
  type: ROUTINE_CREATE,
  routine,
});

export const updateRoutine = (id, newRoutine) => ({
  type: ROUTINE_UPDATE,
  id,
  newRoutine,
});

export const deleteRoutine = id => ({
  type: ROUTINE_DELETE,
  id,
});
