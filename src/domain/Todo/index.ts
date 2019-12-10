import { create } from './services/creation'

export * from './services/creation'
export * from './services/filter'

export interface Todo extends ReturnType<typeof create> {}
export type Todos = Array<Todo>
