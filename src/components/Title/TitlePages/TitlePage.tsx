import * as React from 'react'
import { TitePages } from './TitlePages.Styled'

type Props = {
  textTitle: string
  size: number
  lineHeight: string
  fontWeight: number
}
export function TitlePage({ fontWeight, lineHeight, textTitle, size }: Props) {
  return (
    <TitePages lineHeight={lineHeight} fontWeight={fontWeight} size={size}>
      {textTitle}
    </TitePages>
  )
}
