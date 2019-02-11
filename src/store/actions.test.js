import * as at from 'store/actions';

it('test action creators', () => {
  const todo = {};
  const actionCreate = at.createTodo(todo);
  const actionUpdate = at.updateTodo(todo);
  const actionDelete = at.deleteTodo(5);

  expect(actionCreate).toEqual({ type: at.TODO_CREATE, todo });
  expect(actionUpdate).toEqual({ type: at.TODO_UPDATE, todo });
  expect(actionDelete).toEqual({ type: at.TODO_DELETE, id: 5 });
});
