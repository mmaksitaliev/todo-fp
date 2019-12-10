import React, { ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
}

export function Header({ title, children }: Props) {
  return (
    <div className='content__header'>
      <h3 className='content__title'>{title}</h3>
      <div className='content__header-actions'>{children}</div>
    </div>
  )
}
