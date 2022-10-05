import { ReactNode } from 'react'

import {
  BackgroundTable,
  STable,
  STH,
  STHeadTR,
} from './Style/TableDashboard.Styled'
import { TitleTable } from './TitleTable'

type Props = {
  widht: string
  children: ReactNode
  headers: string[]
  text: string
  icon: ReactNode
  color: string
  colorText: string
  hasButton: boolean
  onHigh?: boolean
  setOnHigh?: () => void
}
export function ViewDataTable({
  children,
  headers,
  text,
  icon,
  color,
  hasButton,
  onHigh,
  widht,
  colorText,
  setOnHigh,
}: Props) {
  return (
    <BackgroundTable widht={widht}>
      <TitleTable
        colorText={colorText}
        color={color}
        icon={icon}
        text={text}
        hasButton={hasButton}
        onHigh={onHigh}
        setOnHigh={setOnHigh}
      />
      <STable>
        <thead>
          <STHeadTR>
            {headers.map(newHeader => (
              <STH>{newHeader}</STH>
            ))}
          </STHeadTR>
        </thead>
        <tbody>{children}</tbody>
      </STable>
    </BackgroundTable>
  )
}
