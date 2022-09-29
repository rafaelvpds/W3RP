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
  padding: string
  fontSize: string
  paddingCard: string
}
export function CardItem({
  backgroundCardItem,
  colorCardItem,
  text,
  value,
  tag,
  valueSerie,
  paddingCard,
  padding,
  fontSize,
}: Props) {
  return (
    <CardSecundario
      paddingCard={paddingCard}
      backgroundCardItem={backgroundCardItem}
      colorCardItem={colorCardItem}
    >
      {valueSerie && (
        <ContainerGraphic>
          <RadialBar serie={valueSerie} />
        </ContainerGraphic>
      )}
      <ContainerInfoCard>
        <TitleCard fontSize={fontSize} padding={padding}>
          {text}
        </TitleCard>
        <ContainerValueCard>
          <ValueData>{value}</ValueData>
          {tag && (
            <TagStyle value={tag}>
              {tag >= 0 && '+'} {tag}%
            </TagStyle>
          )}
        </ContainerValueCard>
      </ContainerInfoCard>
    </CardSecundario>
  )
}
