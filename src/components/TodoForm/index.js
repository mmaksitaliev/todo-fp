import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { createTodo, updateTodo } from 'store/actions/todo'
import { FormFC } from './Form'

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createTodo,
      updateTodo,
    },
    dispatch,
  )

export const TodoForm = connect(null, mapDispatchToProps)(FormFC)
