import React from 'react'
import PropTypes from 'prop-types'
import { List, Icon, Popconfirm } from 'antd'

import { Header } from 'components/ListItemHeader'
import { DangerIcon } from 'components/Icons'

export function RoutineList({ routines, onEditClick, onRemoveClick }) {
  return (
    <List
      className='todo__list'
      itemLayout='horizontal'
      dataSource={routines}
      renderItem={routine => (
        <RoutineItem
          routine={routine}
          onEditClick={onEditClick}
          onRemoveClick={onRemoveClick}
        />
      )}
    />
  )
}

RoutineList.propTypes = {
  routines: PropTypes.array.isRequired,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
}

function RoutineItem({ routine, onEditClick, onRemoveClick }) {
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
