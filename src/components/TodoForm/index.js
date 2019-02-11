import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createTodo } from 'store/actions';
import Form from './Form';

// const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createTodo,
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Form);
