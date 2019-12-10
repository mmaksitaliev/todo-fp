import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { routes } from 'App'
import { Sidebar } from 'components/Sidebar'
import { Todos } from 'components/content/Todos'
import { Routines } from 'components/content/Routines'

type Props = RouteComponentProps

export const MainPage = ({ location }: Props) => {
  const Content = location.pathname === '/routines' ? Routines : Todos
  return (
    <main className='app'>
      <Sidebar links={routes} />
      <Content />
    </main>
  )
}
