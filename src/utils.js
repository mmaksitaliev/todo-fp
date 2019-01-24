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
  return function(arg1, arg2) {
    return fn(arg2, arg1);
  };
}

export function equalBy(prop, value, obj) {
  return value === obj[prop];
}

export function updateProp(prop, obj, value) {
  obj[prop] = value;
  return obj;
}
