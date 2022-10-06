import styled, { keyframes } from 'styled-components'
import { Color } from '../../../theme/colors'

const rotate = keyframes`
0% {
  transform: rotate(0deg);
}

100%{
  transform: rotate(360deg);
}
`
export const ContainerSpiner = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SpinerStyled = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #796ce0;
  border-radius: 100%;
  border-left-color: transparent;
  animation: ${rotate} 1s linear infinite;
`
export const SpinerCircle = styled.div`
  width: 60px;
  height: 60px;
  border: 5px solid ${Color.primary};
  border-radius: 100%;
  border-right-color: transparent;
  animation: ${rotate} 1s linear infinite;
`
