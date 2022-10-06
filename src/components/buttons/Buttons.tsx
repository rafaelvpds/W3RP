/* eslint-disable react/jsx-props-no-spreading */

import * as React from 'react'
import { ActionsButtons } from './Styles/Buttons.Styled'

type ButtonsProps = {
  name: string
  theme: 'faleConosco' | 'login' | 'modalFilter'
} & React.ComponentPropsWithoutRef<'button'>

export function Buttons({ name, theme, ...buttonProps }: ButtonsProps) {
  return (
    <ActionsButtons className={theme} {...buttonProps}>
      {name}
    </ActionsButtons>
  )
}
