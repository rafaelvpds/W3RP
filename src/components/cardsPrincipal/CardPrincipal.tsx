// @flow

import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from 'react'

import { TitleDashboard } from '../TitleDashbord/TitleDashboard'
import {
  ContainerCardPrincipal,
  DivTitleDashboard,
  SelectData,
} from './CardPrincipal.Styled'
import { WarperCard } from './CardItem.style'
import { dateHelper } from '../../util'

type CardPrincipalProps = {
  children: ReactNode
  backgroundCard: string
  text: string
  color: string
  isFilterData?: boolean
  setDate?: Dispatch<
    SetStateAction<{
      start: string
      end: string
    }>
  >
}
export function CardPrincipal({
  children,
  text,
  backgroundCard,
  color,
  isFilterData,
  setDate,
}: CardPrincipalProps) {
  const changeInterval = (event: ChangeEvent<HTMLSelectElement>) =>
    event.target.value === '0'
      ? setDate && setDate(dateHelper.thisMonth())
      : setDate && setDate(dateHelper.lastDays(Number(event.target.value)))
  return (
    <ContainerCardPrincipal backgroundCard={backgroundCard}>
      <DivTitleDashboard>
        <TitleDashboard color={color} isSubtitle={false}>
          {text}
        </TitleDashboard>

        {isFilterData && setDate && (
          <SelectData onChange={changeInterval}>
            <option value={0}>Este Mês</option>
            <option value={30}>30 dias</option>
            <option value={60}>60 dias</option>
            <option value={90}>90 dias</option>
            <option value={120}>120 dias</option>
          </SelectData>
        )}
      </DivTitleDashboard>
      <WarperCard>{children}</WarperCard>
    </ContainerCardPrincipal>
  )
}
