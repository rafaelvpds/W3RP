import styled from 'styled-components'
import { Color } from '../../theme/colors'
import { Fonts } from '../../theme/fonts'

export const ContainerData = styled.div`
  display: flex;
  flex-direction: column;
`
export const ContainerUser = styled.p`
  font-family: ${Fonts.secundary};
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  color: ${Color.cinza900};
`
export const ContainerEmail = styled.p`
  font-family: ${Fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${Color.cinza600};
`
