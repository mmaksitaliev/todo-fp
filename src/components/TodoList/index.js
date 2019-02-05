import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TodoList from "./TodoList";
// import {} from "store/actions"

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(TodoList);
