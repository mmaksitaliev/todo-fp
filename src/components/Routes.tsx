import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

type RouteConfig = { path: string; component: React.ComponentType }

type RoutesProps = {
  routes: Array<RouteConfig>
  defRouteIndex: number
}

export function Routes({ routes, defRouteIndex }: RoutesProps) {
  const defaultPath = routes[defRouteIndex].path
  return (
    <Router>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route exact key={path} path={path} component={component} />
        ))}

        <Redirect from='*' to={defaultPath} />
      </Switch>
    </Router>
  )
}
