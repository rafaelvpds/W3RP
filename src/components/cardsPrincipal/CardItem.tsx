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
  widthCardItem: string
  heightCardItem: string
  backgroundCardItem: string
  colorCardItem: string
  padding: string
  fontSize: string
}
export function CardItem({
  widthCardItem,
  heightCardItem,
  backgroundCardItem,
  colorCardItem,
  text,
  value,
  tag,
  valueSerie,
  padding,
  fontSize,
}: Props) {
  return (
    <CardSecundario
      widthCardItem={widthCardItem}
      heightCardItem={heightCardItem}
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
