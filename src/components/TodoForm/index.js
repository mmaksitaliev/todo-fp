import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createTodo, updateTodo } from 'store/actions';
import Form from './Form';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createTodo,
      updateTodo,
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Form);
