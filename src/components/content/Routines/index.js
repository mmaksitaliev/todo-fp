import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { deleteRoutine } from 'store/actions/routine'
import { RoutinesFC } from './Routines'

const mapStateToProps = state => ({
  routines: state.routines,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ deleteRoutine }, dispatch)
}

export const Routines = connect(mapStateToProps, mapDispatchToProps)(RoutinesFC)
