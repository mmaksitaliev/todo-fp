import React from 'react'

import { Nav } from './Nav'

type Link = { path: string; label: string }

type NavListProps = {
  links: Array<Link>
}

export function NavList({ links }: NavListProps) {
  return (
    <ul className='sidebar__list'>
      {links.map((link, i) => (
        <Nav key={i} {...link} />
      ))}
    </ul>
  )
}
