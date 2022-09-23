// @flow
import * as React from 'react'
import { TitePages } from './TitlePredicoes.Styled'

type Props = {
  textTitle: string
  size: number
}
export function TitlePage({ textTitle, size }: Props) {
  return <TitePages size={size}>{textTitle}</TitePages>
}
