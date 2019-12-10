import React from 'react'
import { Icon } from 'antd'

type SuffixProps = {
  title: string
  clearTitle: () => void
}

export const Suffix = ({ title, clearTitle }: SuffixProps) => {
  if (!title) return <span />
  return <Icon type='close-circle' onClick={clearTitle} />
}
