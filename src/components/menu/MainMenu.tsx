/* eslint-disable react/no-array-index-key */
// @flow
import * as React from 'react'
import Chart from '../../assets/icons/Chart'
import { IconChartLine } from '../../assets/icons/ChartLine'

import {
  ContainerList,
  DivContainerImage,
  DivImage,
  DivList,
  DivText,
  ImagemHands,
  ImagemLogo,
  LinkDirection,
  MenuPrincipal,
  SquareImage,
} from './MainMenu.Styled'
import logo from '../../assets/images/logo.png'
import { IconProduct } from '../../assets/icons/IconProduct'
import hands from '../../assets/images/hands.png'
import { Buttons } from '../buttons/Buttons'

const menuMain = [
  {
    text: 'Dashboard',
    icone: <Chart />,
    url: '/',
  },
  {
    text: 'Predição',
    icone: <IconChartLine />,
    url: '/predicao',
  },
  {
    text: 'Produto',
    icone: <IconProduct />,
    url: '/produto',
  },
]

export function MainMenu() {
  return (
    <MenuPrincipal>
      <ContainerList>
        <DivImage>
          <ImagemLogo src={logo} />
        </DivImage>
        <DivList>
          <ul>
            {menuMain.map((newMenu, index) => (
              <li key={index}>
                <LinkDirection to={newMenu.url}>
                  {newMenu.icone}
                  {newMenu.text}
                </LinkDirection>
              </li>
            ))}
          </ul>
        </DivList>
      </ContainerList>
      <DivContainerImage>
        <SquareImage>
          <ImagemHands src={hands} />
          <DivText>
            <span>
              Precisando de <strong> ajudau suporte </strong> o em algo?
            </span>
          </DivText>
          <Buttons name="Fale Conosco" theme="faleConosco" />
        </SquareImage>
      </DivContainerImage>
    </MenuPrincipal>
  )
}
