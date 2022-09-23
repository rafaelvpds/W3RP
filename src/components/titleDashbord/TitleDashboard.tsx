import { Title } from './TitleDashboard.Styled'

type TitleDashboardProps = {
  children: string
  isSubtitle: boolean
  color: string
}

export function TitleDashboard({
  children,
  isSubtitle,
  color,
}: TitleDashboardProps) {
  return (
    <Title color={color} isSubtitle={isSubtitle}>
      {children}
    </Title>
  )
}
