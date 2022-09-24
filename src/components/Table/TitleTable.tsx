// @flow
import * as React from 'react'

import {
  ButtonAlta,
  ButtonBaixa,
  IconTable,
  TableTitle,
  WarperButton,
  WarperTitle,
  WarperTitleTable,
} from './TableDashboard.Styled'

type Props = {
  text: string
  icon: React.ReactNode
  hasButton: boolean
  color: string
  colorText: string
  inAlta?: boolean
  setInAlta?: () => void
}
export function TitleTable({
  text,
  icon,
  hasButton,
  color,
  inAlta,
  setInAlta,
  colorText,
}: Props) {
  return (
    <WarperTitleTable>
      <WarperTitle>
        <IconTable color={color}>{icon}</IconTable>
        <TableTitle colorText={colorText}>{text}</TableTitle>
      </WarperTitle>

      {hasButton && setInAlta && (
        <WarperButton>
          <ButtonAlta
            type="button"
            style={{ background: inAlta ? '#00c247' : '#E0E0E0' }}
            onClick={() => {
              if (!inAlta) {
                setInAlta()
              }
            }}
          >
            Em Alta
          </ButtonAlta>

          <ButtonBaixa
            type="button"
            style={{ background: !inAlta ? '#ff3333' : '#E0E0E0' }}
            onClick={() => {
              if (inAlta) {
                setInAlta()
              }
            }}
          >
            Em baixa
          </ButtonBaixa>
        </WarperButton>
      )}
    </WarperTitleTable>
  )
}
