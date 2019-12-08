import { create } from './services'

export * from './services'

export interface Routine extends ReturnType<typeof create> {}
