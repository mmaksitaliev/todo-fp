import { v1 } from "uuid";
import { curry, invert, allTrue } from "utils";

export function create(
  goal = "",
  deadline = null,
  tags = [],
  completed = false
) {
  return {
    id: v1(),
    goal,
    deadline,
    tags,
    completed,
    date_created: Date.now(),
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

let dateEq = (date1, { deadline: date2 }) => {
  return (
    date1 &&
    date2 &&
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

const dateGt = (date1, { deadline: date2 }) => {
  // checks date1 < deadline
  return (
    date1 &&
    date2 &&
    (date1.getDate() < date2.getDate() ||
      date1.getMonth() < date2.getMonth() ||
      date1.getFullYear() < date2.getFullYear())
  );
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
