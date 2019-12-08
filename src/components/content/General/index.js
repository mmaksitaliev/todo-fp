import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose, bindActionCreators } from 'redux'

import { capitalize } from 'utils'
import { filterByPathname } from 'domain/TodoService'
import { deleteTodo } from 'store/actions/todo'

import { GeneralFC } from './General'

const mapStateToProps = (state, props) => {
  let { pathname } = props.location
  pathname = pathname.slice(1)

  const todos = filterByPathname(pathname, state.todos)
  const title = capitalize(pathname)

  return { todos, title }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ deleteTodo }, dispatch)
}

const composed = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)

export const General = composed(GeneralFC)
