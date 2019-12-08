type Handlers = Record<string, (state: any, action: any) => {}>

export function createReducer(initialState: {}, handlers: Handlers) {
  return (state = initialState, action: any) => {
    const reducer = handlers[action.type]
    if (reducer) return reducer(state, action)
    return state
  }
}
