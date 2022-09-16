// @flow
import * as React from 'react'
import { ReactNode } from 'react'

type LabelProps = {
  children: ReactNode
  htmlFor: string
}
export function Label({ children, htmlFor }: LabelProps) {
  return <label htmlFor={htmlFor}>{children}</label>
}
