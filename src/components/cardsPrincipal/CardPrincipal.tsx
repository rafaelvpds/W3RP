// @flow

import { ReactNode } from 'react'

import { TitleDashboard } from '../TitleDashbord/TitleDashboard'
import { ContainerCardPrincipal } from './CardPrincipal.Styled'
import { WarperCard } from './CardItem.style'

type CardPrincipalProps = {
  children: ReactNode

  backgroundCard: string
  text: string
  color: string
}
export function CardPrincipal({
  children,

  text,
  backgroundCard,
  color,
}: CardPrincipalProps) {
  return (
    <ContainerCardPrincipal backgroundCard={backgroundCard}>
      <TitleDashboard color={color} isSubtitle={false}>
        {text}
      </TitleDashboard>
      <WarperCard>{children}</WarperCard>
    </ContainerCardPrincipal>
  )
}
