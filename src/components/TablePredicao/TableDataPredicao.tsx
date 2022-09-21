/* eslint-disable react/no-array-index-key */
// @flow
import * as React from 'react'
import { STablePred, STHeadTRPred, STHPred } from './TablePred.Styled'

type Props = {
  children: React.ReactNode
  headers: string[]
}
export function TableDataPredicao({ children, headers }: Props) {
  return (
    <STablePred>
      <STHeadTRPred>
        <tr>
          {headers.map((item, index) => (
            <STHPred key={index}>{item}</STHPred>
          ))}
        </tr>
      </STHeadTRPred>
      <tbody>{children}</tbody>
    </STablePred>
  )
}
