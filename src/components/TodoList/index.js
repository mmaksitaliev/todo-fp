import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleComplete } from '../../store/actions/todo';
import TodoList from './TodoList';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleComplete }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(TodoList);
