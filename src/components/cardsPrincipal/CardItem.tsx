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
  value?: number
  tag?: number
  valueSerie?: number
  backgroundCardItem: string
  colorCardItem: string
  colorTag?: string
  colorTextCard: string
}
export function CardItem({
  backgroundCardItem,
  colorCardItem,
  text,
  value,
  tag,
  valueSerie,
  colorTextCard,
  colorTag,
}: Props) {
  return (
    <CardSecundario
      backgroundCardItem={backgroundCardItem}
      colorCardItem={colorCardItem}
    >
      {valueSerie && (
        <ContainerGraphic>
          <RadialBar serie={valueSerie} />
        </ContainerGraphic>
      )}
      <ContainerInfoCard>
        <TitleCard colorTextCard={colorTextCard}>{text}</TitleCard>
        <ContainerValueCard>
          <ValueData>{value}</ValueData>
          {tag && colorTag && (
            <TagStyle colorTag={colorTag} value={tag}>
              {tag >= 0 && '+'} {tag}%
            </TagStyle>
          )}
        </ContainerValueCard>
      </ContainerInfoCard>
    </CardSecundario>
  )
}
