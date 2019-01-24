import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

import { filterByPathname } from "domain/TodoService";
import { capitalize } from "utils";

import Content from "./Content";

const mapStateToProps = (state, props) => {
  let { pathname } = props.location;
  pathname = pathname.slice(1);

  const todos = filterByPathname(pathname, state.todos);
  let title = capitalize(pathname);

  return { todos, title };
};

const composed = compose(
  withRouter,
  connect(mapStateToProps)
);

export default composed(Content);
