import React from 'react'
import { NavLink } from 'react-router-dom'

type NavProps = {
  path: string
  label: string
}

export function Nav({ path, label }: NavProps) {
  return (
    <li>
      <NavLink to={path} className='sidebar__link' activeClassName='active'>
        {label}
      </NavLink>
    </li>
  )
}
