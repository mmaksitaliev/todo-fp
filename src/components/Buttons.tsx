import React, { ComponentProps } from 'react'
import { Button } from 'antd'

type ButtonProps = ComponentProps<typeof Button>

type NewButton = Pick<ButtonProps, 'onClick' | 'children'>

export function NewButton({ children, onClick }: NewButton) {
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

type AddButton = Pick<ButtonProps, 'onClick' | 'children' | 'size' | 'icon'>

export function AddButton({ size, icon, onClick, children }: AddButton) {
  return (
    <Button
      type='primary'
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

type UpdateButtonProps = Pick<
  ButtonProps,
  'onClick' | 'children' | 'size' | 'icon'
>

export function UpdateButton({
  size,
  icon,
  onClick,
  children,
}: UpdateButtonProps) {
  return (
    <Button
      type='primary'
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

type CloseButtonProps = Pick<ButtonProps, 'onClick' | 'type'>

export function CloseButton({ onClick, type }: CloseButtonProps) {
  return (
    <Button
      onClick={onClick}
      icon='close'
      size='small'
      shape='round'
      type={type}
    />
  )
}
