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
  ImagemMiniLogo,
  LinkDirection,
  LiStyled,
  MenuPrincipal,
  SquareImage,
  UlStyled,
} from './MainMenu.Styled'
import logo from '../../assets/images/logo.png'

import { IconProduct } from '../../assets/icons/IconProduct'
import hands from '../../assets/images/hands.png'
import miniLogo from '../../assets/images/miniLogo.png'
import { Buttons } from '../buttons/Buttons'

const menuMain = [
  {
    text: 'Dashboard',
    icone: <Chart />,
    url: '/dashboard',
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
const miniMenu = [
  {
    icone: <Chart />,
    url: '/dashboard',
  },
  {
    icone: <IconChartLine />,
    url: '/predicao',
  },
  {
    icone: <IconProduct />,
    url: '/produto',
  },
]
type MainMenuProps = {
  isMinimenu: boolean
}

export function MainMenu({ isMinimenu }: MainMenuProps) {
  return (
    <MenuPrincipal isMinimenu={isMinimenu}>
      <ContainerList>
        {!isMinimenu && (
          <DivImage>
            <ImagemLogo src={logo} />
          </DivImage>
        )}
        {isMinimenu && (
          <DivImage>
            <ImagemMiniLogo src={miniLogo} />
          </DivImage>
        )}

        {!isMinimenu && (
          <DivList>
            <UlStyled isMinimenu={isMinimenu}>
              {menuMain.map(item => (
                <LinkDirection to={item.url}>
                  <LiStyled>
                    <span> {item.icone}</span>
                    <span>{item.text}</span>
                  </LiStyled>
                </LinkDirection>
              ))}
            </UlStyled>
          </DivList>
        )}
        {isMinimenu && (
          <DivList>
            <UlStyled isMinimenu={isMinimenu}>
              {miniMenu.map(newMenu => (
                <LinkDirection to={newMenu.url}>
                  <LiStyled>
                    <span>{newMenu.icone}</span>
                  </LiStyled>
                </LinkDirection>
              ))}
            </UlStyled>
          </DivList>
        )}
      </ContainerList>
      {!isMinimenu && (
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
      )}
    </MenuPrincipal>
  )
}
