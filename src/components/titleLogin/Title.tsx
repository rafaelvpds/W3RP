// @flow
import * as React from 'react'
import { Content } from './Title.styled'

type TitleProps = {
  text: string
  isSubtitle: boolean
}
export function Title({ text, isSubtitle }: TitleProps) {
  return <Content isSubtitle={isSubtitle}>{text} </Content>
}
