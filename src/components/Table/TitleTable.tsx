// @flow
import * as React from 'react'
import { Buttons } from '../buttons/Buttons'
import {
  IconTable,
  TableTitle,
  WarperButton,
  WarperTitle,
  WarperTitleTable,
} from './TableDashboard.Styled'

type Props = {
  text: string
  icon: React.ReactNode
  isClient: boolean
  hasButton: boolean
}
export function TitleTable({ text, icon, isClient, hasButton }: Props) {
  return (
    <WarperTitleTable>
      <WarperTitle>
        <IconTable isClient={isClient}>{icon}</IconTable>
        <TableTitle>{text}</TableTitle>
      </WarperTitle>

      {hasButton && (
        <WarperButton>
          <Buttons name="Em alta" theme="statusAlta" />
          <Buttons name="Em baixa" theme="statusBaixa" />
        </WarperButton>
      )}
    </WarperTitleTable>
  )
}
