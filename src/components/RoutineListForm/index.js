import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createTodos } from 'store/actions';
import RoutineListForm from './RoutineListForm';

const mapStateToProps = state => ({
  routines: state.routines,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createTodos }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoutineListForm);
