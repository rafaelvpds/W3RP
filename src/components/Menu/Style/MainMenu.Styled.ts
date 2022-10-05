import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Color } from '../../../theme/colors'
import { Fonts } from '../../../theme/fonts'

export const Warpper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`
export const ContainerList = styled.div`
  margin-bottom: 30px;
`
export const MenuPrincipal = styled.div<{ isMinimenu: boolean }>`
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ isMinimenu }) => (isMinimenu ? `100px` : `271px`)};
  background-color: ${Color.primary};
  padding: 20px;
  color: ${Color.branco};
`
export const DivImage = styled.div`
  display: flex;
  justify-content: center;
`
export const ImagemLogo = styled.img`
  margin: 30px 0;
`
export const ImagemMiniLogo = styled.img`
  margin: 30px 0;
`
export const UlStyled = styled.ul<{ isMinimenu: boolean }>`
  margin: ${({ isMinimenu }) => (isMinimenu ? `10px` : `10px`)};
  list-style-type: none;

  isMinimenu &:hover {
    border-radius: 4px;
    background: ${Color.hover};
  }
`
export const LiStyled = styled.li`
  margin-bottom: 50px;
  margin-right: 50px;
  margin-left: 5px;
  display: flex;
  gap: 20px;
  font-family: ${Fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  &:hover {
    font-weight: 600;
    border-radius: 4px;
    background: ${Color.hover};
  }
`

export const DivList = styled.div`
  display: flex;
  flex-direction: column;
`
export const DivItemMenu = styled.div`
  display: inline-block;
`
export const DivContainerImage = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 100px;
`
export const SquareImage = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 39px;
  width: 223px;
  height: 201px;
  background: #796ce0;
  border-radius: 24px;
`
export const DivText = styled.div`
  width: 177px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
`

export const ImagemHands = styled.img`
  position: absolute;
  width: 194px;
  height: 194px;
  bottom: 108px;
`
export const LinkDirection = styled(Link)`
  text-decoration: none;
  color: ${Color.branco};
`
