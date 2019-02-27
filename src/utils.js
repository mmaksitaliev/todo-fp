import moment from 'moment';

const FORMAT = 'YYYY-MM-DD HH:mm:ss';

export function isNill(value) {
  return value === null || value === undefined || value === '';
}

export function currentTimeFomatted() {
  return moment().format(FORMAT);
}

export function currentTime() {
  return moment();
}

export function formatDate(date) {
  return moment(date).format(FORMAT);
}

export function fromNow(value, unitOfTime = 'day') {
  return moment().add(value, unitOfTime);
}

export const endOfYesterday = () => {
  return moment()
    .subtract(1, 'day')
    .endOf('day');
};

export const endOfToday = () => {
  return moment().endOf('day');
};

export const endOfTomorrow = () => {
  return moment()
    .add(1, 'day')
    .endOf('day');
};

// eslint-disable-next-line no-console
export function loggerHOF(fn, logger = console.log) {
  return (...args) => {
    logger(`Recieved => ${JSON.stringify(args)}`);
    const result = fn(...args);
    logger(`Returned => ${JSON.stringify(result)}`);

    return result;
  };
}

export function curry(fn) {
  if (fn.length === 0) return fn();

  return arg => curry(fn.bind(null, arg));
}

export function pipe(...fns) {
  return fns.reduce((acc, fn) => (...args) => fn(acc(...args)));
}

export function allTrue(predicates) {
  return (...args) => predicates.map(fn => fn(...args)).every(isTrue => isTrue);
}

export function invert(fn) {
  return (...args) => !fn(...args);
}

export function flipTwoArgs(fn) {
  return (arg1, arg2) => fn(arg2, arg1);
}

export function equalBy(prop, value, obj) {
  return value === obj[prop];
}

export function updateProp(prop, obj, value) {
  const newObj = { ...obj };
  newObj[prop] = value;
  return newObj;
}

export function createReducer(initialState, handlers) {
  return (state = initialState, action) => {
    const reducer = handlers[action.type];
    if (reducer) return reducer(state, action);
    return state;
  };
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
