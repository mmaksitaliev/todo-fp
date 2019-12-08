import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

export function NewButton({ children, onClick }) {
  return (
    <Button
      type='primary'
      shape='round'
      icon='plus'
      size='small'
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

NewButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClick: PropTypes.func.isRequired,
}

export function AddButton({ size, icon, onClick, children }) {
  return (
    <Button
      type='secondary'
      shape='round'
      icon={icon}
      size={size}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

AddButton.defaultProps = {
  size: 'small',
  icon: 'copy',
  children: 'Add',
}

AddButton.propTypes = {
  size: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
}

export function UpdateButton({ size, icon, onClick, children }) {
  return (
    <Button
      type='secondary'
      shape='round'
      icon={icon}
      size={size}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

UpdateButton.defaultProps = {
  size: 'small',
  icon: 'diff',
  children: 'Update',
}

UpdateButton.propTypes = {
  size: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
}

export function CloseButton({ onClose, type }) {
  return (
    <Button
      onClick={onClose}
      icon='close'
      size='small'
      shape='round'
      type={type}
    />
  )
}

CloseButton.propTypes = {
  onClose: PropTypes.func.isRequired,
  type: PropTypes.string,
}
