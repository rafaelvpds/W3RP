import * as React from 'react'
import { STableProduct, STRProduct } from './TableProduct.Styled'

type Props = {
  children: React.ReactNode
  headers: string[]
}
export function TableProduct({ children, headers }: Props) {
  return (
    <STableProduct>
      <thead>
        <STRProduct>
          {headers.map(item => (
            <th>{item}</th>
          ))}
        </STRProduct>
      </thead>
      <tbody>{children}</tbody>
    </STableProduct>
  )
}
