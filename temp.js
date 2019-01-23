const curry = fn => {
  if (fn.length === 0) return fn();

  return arg0 => curry(fn.bind(null, arg0));
};

function equalBy(prop, value, obj) {
  return value === prop;
}

let equalById = curry(equalBy)("id");

console.log(equalById(5)(2));
