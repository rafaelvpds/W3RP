import * as React from 'react'
import { STableProduct, STHProduct, STRProduct } from './TableProduct.Styled'

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
            <STHProduct>{item}</STHProduct>
          ))}
        </STRProduct>
      </thead>
      <tbody>{children}</tbody>
    </STableProduct>
  )
}
