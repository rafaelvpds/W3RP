/* eslint-disable react/no-array-index-key */
// @flow
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
          {headers.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </STRProduct>
      </thead>
      <tbody>{children}</tbody>
    </STableProduct>
  )
}
