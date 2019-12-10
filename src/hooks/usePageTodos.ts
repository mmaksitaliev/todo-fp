import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { RootState } from 'store'
import { capitalize } from 'utils'
import { filterByPathname } from 'domain/Todo'

export const usePageTodos = () => {
  const todos = useSelector((state: RootState) => state.todos)

  let { pathname } = useLocation()
  pathname = pathname.slice(1)

  const filteredTodos = filterByPathname(pathname, todos)
  const title = capitalize(pathname)

  return { todos: filteredTodos, title }
}
