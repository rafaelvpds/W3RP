import * as React from 'react'
import { Color } from '../../theme/colors'

import {
  ButtonAlta,
  ButtonBaixa,
  IconTable,
  TableTitle,
  WarperButton,
  WarperTitle,
  WarperTitleTable,
} from './Style/TableDashboard.Styled'

type Props = {
  text: string
  icon: React.ReactNode
  hasButton: boolean
  color: string
  colorText: string
  onHigh?: boolean
  setOnHigh?: () => void
}
export function TitleTable({
  text,
  icon,
  hasButton,
  color,
  onHigh,
  setOnHigh,
  colorText,
}: Props) {
  return (
    <WarperTitleTable>
      <WarperTitle>
        <IconTable color={color}>{icon}</IconTable>
        <TableTitle colorText={colorText}>{text}</TableTitle>
      </WarperTitle>

      {hasButton && setOnHigh && (
        <WarperButton>
          <ButtonAlta
            type="button"
            style={{
              background: onHigh ? `${Color.sucesso}` : `${Color.cinza300}`,
            }}
            onClick={() => {
              if (!onHigh) {
                setOnHigh()
              }
            }}
          >
            Em Alta
          </ButtonAlta>

          <ButtonBaixa
            type="button"
            style={{
              background: !onHigh ? `${Color.erro}` : `${Color.cinza300}`,
            }}
            onClick={() => {
              if (onHigh) {
                setOnHigh()
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
