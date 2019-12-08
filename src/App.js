import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { faCheck, faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import { Routes } from 'components/Routes'
import { MainPage } from 'pages/MainPage'
import { store } from './store'

library.add(faCheck, faCoffee, faPlus)

export const routes = [
  { path: '/all', label: 'All', component: MainPage },
  { path: '/today', label: 'Today', component: MainPage },
  { path: '/upcoming', label: 'Upcoming', component: MainPage },
  { path: '/completed', label: 'Completed', component: MainPage },
  { path: '/routines', label: 'Routines', component: MainPage },
]

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes routes={routes} defRouteIndex={1} />
      </Provider>
    )
  }
}
