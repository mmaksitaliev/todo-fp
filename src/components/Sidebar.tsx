import React from 'react'

import { NavList } from 'components/NavList'

type Link = { path: string; label: string }

type SidebarProps = {
  links: Array<Link>
}

export function Sidebar({ links }: SidebarProps) {
  return (
    <div className='sidebar'>
      <NavList links={links} />
    </div>
  )
}
