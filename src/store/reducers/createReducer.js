export default function createReducer(initialState, handlers) {
  return function(state = initialState, action) {
    const reducer = handlers[action.type];
    if (reducer) return reducer(state, action);
    return state;
  };
}
