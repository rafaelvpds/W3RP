import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Warpper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`
export const ContainerList = styled.div`
  margin-bottom: 30px;
`
export const MenuPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 271px;
  background-color: #001c98;
  padding: 20px;
  color: #ffff;

  ul {
    li {
      list-style: none;
      padding: 20px;
      svg {
        margin-right: 20px;
        width: 20px;
        height: 20px;
      }
    }
  }
`
export const DivImage = styled.div`
  display: flex;
  justify-content: center;
`
export const ImagemLogo = styled.img`
  margin: 30px 0;
`
export const DivList = styled.div`
  display: flex;
  justify-content: start;
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
  color: #ffffff;
`
