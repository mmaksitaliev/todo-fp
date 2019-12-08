import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { toggleComplete } from 'store/actions/todo'
import { TodoListFC } from './TodoList'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleComplete }, dispatch)
}

export const TodoList = connect(null, mapDispatchToProps)(TodoListFC)
