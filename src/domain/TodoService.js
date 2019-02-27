import { v1 } from 'uuid';
import {
  curry,
  allTrue,
  currentTimeFomatted,
  endOfToday,
  endOfYesterday,
} from 'utils';
import moment from 'moment';

export function create(title, comment, deadline, tags = [], completed = false) {
  title = title || 'Default title';
  return {
    id: v1(),
    title,
    comment,
    deadline,
    tags,
    completed,
    date_created: currentTimeFomatted(),
  };
}

export const createFromRoutine = routine => {
  const deadline = currentTimeFomatted();
  return create(routine.title, routine.comment, deadline);
};

const isCompleted = ({ completed }) => completed;

function filter(fn, collection) {
  return collection.filter(fn);
}

function filterByPredicates(predicates, collection) {
  return collection.filter(allTrue(predicates));
}

const dateGt = (date1, { deadline: date2 }) => {
  // checks date1 > deadline
  const mDate1 = date1 && moment(date1);
  const mDate2 = date2 && moment(date2);

  return mDate1 && mDate2 && mDate1 > mDate2;
};

const dateLt = (date1, { deadline: date2 }) => {
  // checks date1 < deadline
  const mDate1 = date1 && moment(date1);
  const mDate2 = date2 && moment(date2);

  return mDate1 && mDate2 && mDate1 < mDate2;
};

export function filterTodays(todos) {
  const gtYesterday = dateLt.bind(null, endOfYesterday());
  const ltEndOfDay = dateGt.bind(null, endOfToday());
  // todo date is between yesterday and tomorrow
  return filterByPredicates([gtYesterday, ltEndOfDay], todos);
}

export function filterUpcoming(todos) {
  const isUpcomming = dateLt.bind(null, endOfToday());
  // end of today is less than todo date
  return filterByPredicates([isUpcomming], todos);
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
