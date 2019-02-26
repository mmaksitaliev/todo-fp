import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createRoutine, updateRoutine } from 'store/actions';
import RoutinesForm from './RoutineForm';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createRoutine,
      updateRoutine,
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(RoutinesForm);
