import React, { ReactNode } from 'react'

type HeaderProps = {
  children: ReactNode
}

export function Header({ children }: HeaderProps) {
  return <div className='header spacebtw'>{children}</div>
}
