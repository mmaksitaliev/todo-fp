import { connect } from "react-redux";
import TodoList from "../components/TodoList";

const mapStateToProps = ({ todos }) => ({
  todos
});

export default connect(
  mapStateToProps,
  null
)(TodoList);
