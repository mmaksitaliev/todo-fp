import { v1 } from 'uuid'

export const create = (title: string, comment: string) => {
  title = title || 'Default title'
  return { id: v1(), title, comment }
}

export const update = (oldId: string, title: string, comment: string) => {
  title = title || 'Default title'
  return { id: oldId, title, comment }
}
