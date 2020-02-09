import { create, Todo } from 'domain/Todo'
import { todos as todoReducer } from '..'

const createWithId = (id: string, todo: Pick<Todo, 'title'>) => ({
  ...todo,
  id,
  comment: '',
  completed: true,
  tags: [] as Array<string>,
  deadline: '',
  dateCreated: '',
})

it('create TODO', () => {
  const reducer = todoReducer.caseReducers.createTodo
  const action = todoReducer.actions.createTodo
  const todo = create({ title: 'Learn FP', comment: '', deadline: '' })
  const nextState = reducer([], action(todo))
  expect(nextState).toEqual([todo])
})

it('update TODO', () => {
  const reducer = todoReducer.caseReducers.updateTodo
  const action = todoReducer.actions.updateTodo
  const state = [createWithId('1', { title: 'Learn FP' })]

  const todo = createWithId('1', { title: 'Learn FP thoroughly' })
  let nextState = reducer(state, action(todo))
  expect(nextState).toEqual([todo])

  // test for not existing id
  todo.id = '2'
  nextState = reducer(state, action(todo))
  expect(nextState).toEqual(state)
})

it('remove TODO', () => {
  const reducer = todoReducer.caseReducers.deleteTodo
  const action = todoReducer.actions.deleteTodo
  const state = [createWithId('1', { title: 'Learn FP' })]

  let nextState = reducer(state, action('1'))
  expect(nextState).toEqual([])

  // test for not existing id
  nextState = reducer(state, action('5'))
  expect(nextState).toEqual(state)
})
