import { v1 } from 'uuid';
import * as R from 'ramda';

import {
  currentTimeFomatted,
  endOfToday,
  endOfYesterday,
  formatDate,
  dateGt,
  dateLt,
  sortByCreatedDate,
} from 'utils';

export function create(title, comment, deadline, tags = [], completed = false) {
  title = title || 'Default title';
  const date = (deadline && formatDate(deadline)) || '';
  return {
    id: v1(),
    title,
    comment,
    deadline: date,
    tags,
    completed,
    dateCreated: currentTimeFomatted(),
  };
}

export function update(oldId, todo) {
  const date = (todo.deadline && formatDate(todo.deadline)) || '';
  return {
    ...todo,
    deadline: date,
    id: oldId,
  };
}

export function createFromRoutine(routine) {
  const deadline = currentTimeFomatted();
  return create(routine.title, routine.comment, deadline);
}

export function filterTodays(todos) {
  const gtYesterday = R.partial(todoDateLt, [endOfYesterday()]);
  const ltEndOfDay = R.partial(todoDateGt, [endOfToday()]);
  const isTodays = R.allPass([gtYesterday, ltEndOfDay]);
  // todo date is between yesterday and tomorrow
  return R.pipe(
    R.filter(isTodays),
    R.sort(sortByCreatedDate)
  )(todos);
}

export function filterUpcoming(todos) {
  const isUpcomming = R.partial(todoDateLt, [endOfToday()]);
  // end of today is less than todo date
  return R.pipe(
    R.filter(isUpcomming),
    R.sort(sortByCreatedDate)
  )(todos);
}

export function filterByPathname(pathname, todos) {
  const filter = pathnameFilterMapping[pathname];
  if (filter) {
    return filter(todos);
  }

  return todos;
}

const isCompleted = R.propEq('completed', true);

export const filterCompleted = R.filter(isCompleted);

function todoDateGt(date, todo) {
  return dateGt(date, todo.deadline);
}

function todoDateLt(date, todo) {
  return dateLt(date, todo.deadline);
}

const pathnameFilterMapping = {
  all: null,
  today: filterTodays,
  upcoming: filterUpcoming,
  completed: filterCompleted,
};
