import { ReactNode } from 'react'
import { Title } from './TitleDashboard.Styled'

type TitleDashboardProps = {
  children: ReactNode
  isSubtitle: boolean
}

export function TitleDashboard({ children, isSubtitle }: TitleDashboardProps) {
  return <Title isSubtitle={isSubtitle}>{children}</Title>
}
