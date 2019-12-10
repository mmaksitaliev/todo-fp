import { fromNow } from 'utils'
import { create, filterByPathname } from '..'

const completed = [
  create({
    title: '',
    comment: '',
    deadline: fromNow(-1).toISOString(),
    completed: true,
  }),
]

const todays = [
  create({
    title: '',
    comment: '',
    deadline: fromNow(0).toISOString(),
  }),
  create({
    title: '',
    comment: '',
    deadline: fromNow(0).toISOString(),
  }),
]

const upcoming = [
  create({
    title: '',
    comment: '',
    deadline: fromNow(1).toISOString(),
  }),
]

const todos = [...completed, ...todays, ...upcoming]

it('returns passed in todos', () => {
  const filteredTodos = filterByPathname('', todos)
  expect(filteredTodos).toEqual(todos)
})

it('returns todays todos', () => {
  const filteredTodos = filterByPathname('today', todos)
  expect(filteredTodos).toEqual(todays)
})

it('returns upcoming todos', () => {
  const filteredTodos = filterByPathname('upcoming', todos)
  expect(filteredTodos).toEqual(upcoming)
})

it('returns completed todos', () => {
  const filteredTodos = filterByPathname('completed', todos)
  expect(filteredTodos).toEqual(completed)
})
