import * as React from 'react'
import { STablePred, STHeadTRPred, STHPred } from './style/TablePred.Styled'

type Props = {
  children: React.ReactNode
  headers: string[]
}
export function TableDataPredicao({ children, headers }: Props) {
  return (
    <STablePred>
      <STHeadTRPred>
        <tr>
          {headers.map(item => (
            <STHPred>{item}</STHPred>
          ))}
        </tr>
      </STHeadTRPred>
      <tbody>{children}</tbody>
    </STablePred>
  )
}
