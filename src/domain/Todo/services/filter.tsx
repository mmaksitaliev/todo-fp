import * as R from 'ramda'
import moment from 'moment'

import { endOfToday, endOfYesterday, sortByCreatedDate } from 'utils'
import { Todos, Todo } from '..'

function filterTodays(todos: Todos) {
  const isTodays = (todo: Todo) => {
    return moment(todo.deadline).isBetween(endOfYesterday(), endOfToday())
  }
  return R.pipe<Todos, Todos, Todos>(
    R.filter(isTodays),
    R.sort(sortByCreatedDate),
  )(todos)
}

function filterUpcoming(todos: Todos) {
  const isUpcomming = (todo: Todo) => {
    return moment(todo.deadline).isSameOrBefore(endOfYesterday())
  }
  return R.pipe<Todos, Todos, Todos>(
    R.filter(isUpcomming),
    R.sort(sortByCreatedDate),
  )(todos)
}

export function filterByPathname(
  pathname: keyof typeof pathnameFilterMapping,
  todos: Todos,
) {
  const filter = pathnameFilterMapping[pathname]
  if (filter) {
    return filter(todos)
  }

  return todos
}

const isCompleted = R.propEq('completed', true)

const filterCompleted = R.filter(isCompleted)

const pathnameFilterMapping = {
  all: null,
  today: filterTodays,
  upcoming: filterUpcoming,
  completed: filterCompleted,
}
