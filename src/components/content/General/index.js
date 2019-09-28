import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';

import { deleteTodo } from '../../../store/actions/todo';
import { filterByPathname } from 'domain/TodoService';
import { capitalize } from 'utils';
import General from './General';

const mapStateToProps = (state, props) => {
  let { pathname } = props.location;
  pathname = pathname.slice(1);

  const todos = filterByPathname(pathname, state.todos);
  const title = capitalize(pathname);

  return { todos, title };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ deleteTodo }, dispatch);
};

const composed = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default composed(General);
