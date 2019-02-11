import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';

Routes.propTypes = {
  routes: PropTypes.array.isRequired,
  defRouteIndex: PropTypes.number.isRequired,
};

export default function Routes({ routes, defRouteIndex }) {
  const defaultPath = routes[defRouteIndex].path;
  return (
    <Router>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route exact key={path} path={path} component={component} />
        ))}

        <Redirect from='*' to={defaultPath} />
      </Switch>
    </Router>
  );
}
