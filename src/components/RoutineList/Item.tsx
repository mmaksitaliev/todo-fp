import React from 'react'
import PropTypes from 'prop-types'
import { List, Icon, Popconfirm } from 'antd'

import { Header } from 'components/ListItemHeader'
import { DangerIcon } from 'components/Icons'
import { Routine } from 'domain/Routine'
import { RoutineListProps } from '.'

type RoutineItemProps = {
  routine: Routine
} & Pick<RoutineListProps, 'onEditClick' | 'onRemoveClick'>

export function RoutineItem({
  routine,
  onEditClick,
  onRemoveClick,
}: RoutineItemProps) {
  const actions = [
    <Icon key='edit-icon' type='edit' onClick={() => onEditClick(routine)} />,
    <Popconfirm
      key='delete-confirm'
      title='Are you sure delete this routine?'
      onConfirm={() => onRemoveClick(routine.id)}
      okText='Yes'
      cancelText='No'
    >
      <DangerIcon type='delete' />
    </Popconfirm>,
  ]
  return (
    <List.Item actions={actions}>
      <List.Item.Meta
        title={<Header title={routine.title} />}
        description={routine.comment}
      />
    </List.Item>
  )
}

RoutineItem.propTypes = {
  routine: PropTypes.object.isRequired,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
}
