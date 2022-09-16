// @flow
import * as React from 'react'
import { ReactNode } from 'react'
import { CardSecundario } from './CardSecudario.Styled'

type CardSecudarioProps = {
  children: ReactNode
}

export function CardSecudario({ children }: CardSecudarioProps) {
  return <CardSecundario>{children}</CardSecundario>
}
