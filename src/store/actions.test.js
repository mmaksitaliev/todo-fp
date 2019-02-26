import * as at from 'store/actions';

it('test todo action creators', () => {
  const todo = {};
  const actionCreate = at.createTodo(todo);
  const actionUpdate = at.updateTodo(todo);
  const actionDelete = at.deleteTodo(5);

  expect(actionCreate).toEqual({ type: at.TODO_CREATE, todo });
  expect(actionUpdate).toEqual({ type: at.TODO_UPDATE, todo });
  expect(actionDelete).toEqual({ type: at.TODO_DELETE, id: 5 });
});

it('test routine action creators', () => {
  const routine = {};
  const actionCreate = at.createRoutine(routine);
  const actionUpdate = at.updateRoutine(5, routine);
  const actionDelete = at.deleteRoutine(5);

  expect(actionCreate).toEqual({ type: at.ROUTINE_CREATE, routine });
  expect(actionUpdate).toEqual({
    type: at.ROUTINE_UPDATE,
    id: 5,
    newRoutine: routine,
  });
  expect(actionDelete).toEqual({ type: at.ROUTINE_DELETE, id: 5 });
});
