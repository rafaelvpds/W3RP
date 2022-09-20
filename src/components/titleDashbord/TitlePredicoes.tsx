// @flow
import * as React from 'react'
import { TitePredicoes } from './TitlePredicoes.Styled'

type Props = {
  textTitle: string
  isTitleCard: boolean
}
export function TitlePredicoes({ textTitle, isTitleCard }: Props) {
  return <TitePredicoes isTitleCard={isTitleCard}>{textTitle}</TitePredicoes>
}
