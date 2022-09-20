/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
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
  children: ReactNode
  headers: string[]
  text: string
  icon: ReactNode
  isClient: boolean
}
export function ViewDataTable({
  children,
  headers,
  text,
  icon,
  isClient,
}: Props) {
  return (
    <BackgroundTable>
      <TitleTable isClient={isClient} icon={icon} text={text} />
      <STable>
        <STHead>
          <STHeadTR>
            {headers.map((newHeader, index) => (
              <STH key={index}>{newHeader}</STH>
            ))}
          </STHeadTR>
        </STHead>
        <STBody>{children}</STBody>
      </STable>
    </BackgroundTable>
  )
}
