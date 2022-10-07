import * as React from 'react'

import { IconChartLine } from '../../assets/icons/IconChartLine'

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
} from './Styles/MainMenu.Styled'
import logo from '../../assets/images/logo.png'

import { IconProduct } from '../../assets/icons/IconProduct'
import hands from '../../assets/images/hands.png'
import miniLogo from '../../assets/images/miniLogo.png'
import { Buttons } from '../Buttons/Buttons'
import { IconChart } from '../../assets/icons/IconChart'

const menuMain = [
  {
    text: 'Dashboard',
    icone: <IconChart />,
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
    icone: <IconChart />,
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
                Precisando de <strong> ajuda ou suporte </strong> ou em algo?
              </span>
            </DivText>
            <Buttons name="Fale Conosco" theme="faleConosco" />
          </SquareImage>
        </DivContainerImage>
      )}
    </MenuPrincipal>
  )
}
