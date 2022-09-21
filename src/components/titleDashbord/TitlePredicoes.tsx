// @flow
import * as React from 'react'
import { TitePredicoes } from './TitlePredicoes.Styled'

type Props = {
  textTitle: string
}
export function TitlePredicoes({ textTitle }: Props) {
  return <TitePredicoes>{textTitle}</TitePredicoes>
}
