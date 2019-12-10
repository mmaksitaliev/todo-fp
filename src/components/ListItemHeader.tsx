import React, { ReactNode } from 'react'

type HeaderProps = {
  title: string
  children?: ReactNode
}

export function Header({ title, children }: HeaderProps) {
  return (
    <div className='todo__header'>
      <span>{title}</span>
      <span>{children}</span>
    </div>
  )
}
