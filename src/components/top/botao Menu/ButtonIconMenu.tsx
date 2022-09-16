/* eslint-disable react/jsx-props-no-spreading */
// @flow
import * as React from 'react'
import { IconMenu } from '../../../assets/icons/IconMenu'

//
type ButtonIconMenuProps = {} & React.ComponentPropsWithoutRef<'button'>
export function ButtonIconMenu({ ...funtionButton }: ButtonIconMenuProps) {
  return (
    <ButtonIconMenu {...funtionButton} type="button">
      <IconMenu />
    </ButtonIconMenu>
  )
}
