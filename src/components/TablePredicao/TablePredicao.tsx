// @flow
import * as React from 'react'

type Props = {
  dataProduto: string
  dateCompras: string
}
export function TablePredicao({ dataProduto, dateCompras }: Props) {
  return (
    <tbody>
      <td>{dataProduto}</td>
      <td>{dateCompras}</td>
    </tbody>
  )
}
