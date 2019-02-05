import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TodoList from "./TodoList";
import { toggleComplete } from "store/actions";

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleComplete }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(TodoList);
