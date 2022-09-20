// @flow
import * as React from 'react'
import {
  IconTable,
  TableTitle,
  WarperButton,
  WarperTitle,
} from './TableDashboard.Styled'

type Props = {
  text: string
  icon: React.ReactNode
  isClient: boolean
}
export function TitleTable({ text, icon, isClient }: Props) {
  return (
    <WarperTitle>
      <IconTable isClient={isClient}>{icon}</IconTable>
      <TableTitle>{text}</TableTitle>
      <WarperButton />
    </WarperTitle>
  )
}
