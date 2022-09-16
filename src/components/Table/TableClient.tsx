import { ReactNode } from 'react'
import { STBodyTR, STD } from './TableDashboard.Styled'

type TableClientProps = {
  id: string
  nameClient: string
  percentege: string
  icon: ReactNode
}
export function TableClient({
  id,
  nameClient,
  percentege,
  icon,
}: TableClientProps) {
  return (
    <STBodyTR>
      <STD>{id}</STD>
      <STD>{nameClient}</STD>
      <STD center>{percentege}</STD>
      <STD>{icon}</STD>
    </STBodyTR>
  )
}
