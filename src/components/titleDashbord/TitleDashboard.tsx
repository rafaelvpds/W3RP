import { Title } from './TitleDashboard.Styled'

type TitleDashboardProps = {
  children: string
  isSubtitle: boolean
  color: string
  fontWeight: string
  lineHeight: string
}

export function TitleDashboard({
  children,
  isSubtitle,
  color,
  fontWeight,
  lineHeight,
}: TitleDashboardProps) {
  return (
    <Title
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      color={color}
      isSubtitle={isSubtitle}
    >
      {children}
    </Title>
  )
}
