import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Form from "./Form";
import { createTodo } from "store/actions";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      createTodo,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
