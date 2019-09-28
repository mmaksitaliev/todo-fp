import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createRoutine, updateRoutine } from 'store/actions/routine';
import { RoutineFormFC } from './RoutineForm';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createRoutine,
      updateRoutine,
    },
    dispatch
  );

export const RoutineForm = connect(
  null,
  mapDispatchToProps
)(RoutineFormFC);
