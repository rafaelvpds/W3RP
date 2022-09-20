import { Title } from './TitleDashboard.Styled'

type TitleDashboardProps = {
  children: string
  isSubtitle: boolean
}

export function TitleDashboard({ children, isSubtitle }: TitleDashboardProps) {
  return <Title isSubtitle={isSubtitle}>{children}</Title>
}
