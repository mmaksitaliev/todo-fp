import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose, bindActionCreators } from "redux";

import { filterByPathname } from "domain/TodoService";
import { capitalize } from "utils";
import Content from "./Content";
import { createTodo } from "store/actions";

const mapStateToProps = (state, props) => {
  let { pathname } = props.location;
  pathname = pathname.slice(1);

  const todos = filterByPathname(pathname, state.todos);
  let title = capitalize(pathname);

  return { todos, title };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      createTodo,
    },
    dispatch
  );
};

const composed = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default composed(Content);
