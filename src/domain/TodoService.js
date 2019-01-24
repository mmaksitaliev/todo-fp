import { v1 } from "uuid";
import { curry, invert, allTrue } from "utils";

const isCompleted = ({ completed }) => completed;
const notCompleted = invert(isCompleted);

function filterTodos(predicates, todos) {
  return todos.filter(allTrue(predicates));
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
    date_created: Date.now()
  };
}

export function update(old, toUpdate) {
  return { ...toUpdate, id: old.id };
}

export function filterTodays(todos) {
  const isTodays = curry(dateEq)(new Date());
  return filterTodos([notCompleted, isTodays], todos);
}

export function filterUpcoming(todos) {
  const isUpcomming = curry(dateGt)(new Date());
  return filterTodos([notCompleted, isUpcomming], todos);
}

export const filterCompleted = curry(filterTodos)([isCompleted]);

export function filterByHash(hash, todos) {
  // remove '#'
  hash = hash.slice(1);
  const filter = filterMap[hash];
  return filter ? filter(todos) : todos;
}

const filterMap = {
  all: null,
  today: filterTodays,
  upcoming: filterUpcoming,
  completed: filterCompleted
};
