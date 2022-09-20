// @flow
import * as React from 'react'
import { RadialBar } from '../grafico/RadialBar'
import {
  TagStyle,
  TitleCard,
  ValueData,
  CardSecundario,
  ContainerGraphic,
  ContainerInfoCard,
  ContainerValueCard,
} from './CardItem.style'

type Props = {
  text: string
  status: 'alta' | 'baixa'
  value: number
  tag: number
  valueSerie: number
}
export function CardItem({ text, value, status, tag, valueSerie }: Props) {
  return (
    <CardSecundario>
      <ContainerGraphic>
        <RadialBar serie={valueSerie} />
      </ContainerGraphic>
      <ContainerInfoCard>
        <TitleCard>
          Total <strong>{text}</strong> em {status}
        </TitleCard>
        <ContainerValueCard>
          <ValueData>{value}</ValueData>
          <TagStyle value={tag}>
            {tag > 0 && '+'} {tag}%
          </TagStyle>
        </ContainerValueCard>
      </ContainerInfoCard>
    </CardSecundario>
  )
}
