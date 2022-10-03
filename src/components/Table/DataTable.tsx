import { ReactNode } from 'react'

import {
  BackgroundTable,
  STable,
  STBody,
  STH,
  STHead,
  STHeadTR,
} from './TableDashboard.Styled'
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
  inAlta?: boolean
  setInAlta?: () => void
}
export function ViewDataTable({
  children,
  headers,
  text,
  icon,
  color,
  hasButton,
  inAlta,
  widht,
  colorText,
  setInAlta,
}: Props) {
  return (
    <BackgroundTable widht={widht}>
      <TitleTable
        colorText={colorText}
        color={color}
        icon={icon}
        text={text}
        hasButton={hasButton}
        inAlta={inAlta}
        setInAlta={setInAlta}
      />
      <STable>
        <STHead>
          <STHeadTR>
            {headers.map(newHeader => (
              <STH>{newHeader}</STH>
            ))}
          </STHeadTR>
        </STHead>
        <STBody>{children}</STBody>
      </STable>
    </BackgroundTable>
  )
}
