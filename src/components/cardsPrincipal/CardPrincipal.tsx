// @flow

import { ReactNode } from 'react'

import { TitleDashboard } from '../titleDashbord/TitleDashboard'
import { ContainerCardPrincipal } from './CardPrincipal.Styled'
import { WarperCard } from './CardItem.style'

type CardPrincipalProps = {
  children: ReactNode
}
export function CardPrincipal({ children }: CardPrincipalProps) {
  return (
    <ContainerCardPrincipal>
      <TitleDashboard isSubtitle={false}>Dashbord</TitleDashboard>
      <WarperCard>{children}</WarperCard>
    </ContainerCardPrincipal>
  )
}
