import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'

const defPropTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
}

export function DangerIcon(props) {
  return <Icon {...props} style={{ color: '#FF5052' }} />
}

DangerIcon.propTypes = {
  ...defPropTypes,
}
