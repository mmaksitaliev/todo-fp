import { v1 } from 'uuid';
import { curry, invert, allTrue, currentTime, isNill } from 'utils';
import moment from 'moment';

export function create(
  title = '',
  description,
  deadline = null,
  tags = [],
  completed = false
) {
  description = isNill(description) ? 'Default decription' : description;
  return {
    id: v1(),
    title,
    description,
    deadline,
    tags,
    completed,
    date_created: currentTime(),
  };
}

export function update(old, toUpdate) {
  return { ...toUpdate, id: old.id };
}

const isCompleted = ({ completed }) => completed;
const notCompleted = invert(isCompleted);

function filter(fn, collection) {
  return collection.filter(fn);
}

function filterByPredicates(predicates, collection) {
  return collection.filter(allTrue(predicates));
}

const dateEq = (date1, { deadline: date2 }) => {
  const mDate1 = date1 && moment(date1);
  const mDate2 = date2 && moment(date2);

  return mDate1 && mDate2 && mDate1.diff(mDate2, 'days') === 0;
};

const dateGt = (date1, { deadline: date2 }) => {
  // checks date1 < deadline
  const mDate1 = date1 && moment(date1);
  const mDate2 = date2 && moment(date2);

  return mDate1 && mDate2 && mDate1.diff(mDate2, 'days') < 0;
};

export function filterTodays(todos) {
  const isTodays = curry(dateEq)(new Date());
  return filterByPredicates([notCompleted, isTodays], todos);
}

export function filterUpcoming(todos) {
  const isUpcomming = curry(dateGt)(new Date());
  return filterByPredicates([notCompleted, isUpcomming], todos);
}

export const filterCompleted = curry(filter)(isCompleted);

export function filterByPathname(hash, todos) {
  const filter = hashToFilterMapping[hash];
  return filter ? filter(todos) : todos;
}

const hashToFilterMapping = {
  all: null,
  today: filterTodays,
  upcoming: filterUpcoming,
  completed: filterCompleted,
};