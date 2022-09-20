import { ReactNode } from 'react'
import { STBodyTR, STD } from './TableDashboard.Styled'

type TableProductProps = {
  id: string
  nameProduct: string
  percentege: number
  icon: ReactNode
}
export function TableProduct({
  id,
  nameProduct,
  percentege,
  icon,
}: TableProductProps) {
  return (
    <STBodyTR>
      <STD>{id}</STD>
      <STD>{nameProduct}</STD>
      <STD center>{percentege}</STD>
      <STD center>{icon}</STD>
    </STBodyTR>
  )
}
