// @flow

import { ReactNode } from 'react'

import { TitleDashboard } from '../TitleDashbord/TitleDashboard'
import {
  ContainerCardPrincipal,
  DivTitleDashboard,
  SelectData,
} from './CardPrincipal.Styled'
import { WarperCard } from './CardItem.style'
import { IconsCalendar } from '../../assets/icons/IconsCalendar'

type CardPrincipalProps = {
  children: ReactNode
  backgroundCard: string
  text: string
  color: string
  isFilterData?: boolean
}
export function CardPrincipal({
  children,
  text,
  backgroundCard,
  color,
  isFilterData,
}: CardPrincipalProps) {
  return (
    <ContainerCardPrincipal backgroundCard={backgroundCard}>
      <DivTitleDashboard>
        <TitleDashboard color={color} isSubtitle={false}>
          {text}
        </TitleDashboard>

        {isFilterData && (
          <SelectData>
            <option value="" selected>
              <IconsCalendar /> Mostrar: Esse mês
            </option>
            <option value="120">120 dias</option>
            <option value="90">90 dias</option>
            <option value="60">60 dias</option>
            <option value="30">30 dias</option>
          </SelectData>
        )}
      </DivTitleDashboard>
      <WarperCard>{children}</WarperCard>
    </ContainerCardPrincipal>
  )
}
