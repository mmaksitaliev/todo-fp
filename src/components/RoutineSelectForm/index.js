import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createTodos } from '../../store/actions/todo';
import { RoutineSelectFormFC } from './RoutineSelectForm';

const mapStateToProps = state => ({
  routines: state.routines,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createTodos }, dispatch);

export const RoutineSelectForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoutineSelectFormFC);
