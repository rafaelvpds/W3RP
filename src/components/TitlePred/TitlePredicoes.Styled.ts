import styled from 'styled-components'
import { Color } from '../../types/colors'
import { Fonts } from '../../types/fonts'

export const TitePages = styled.h1<{
  lineHeight: string
  fontWeight: number
  size: number
}>`
  font-size: ${({ size }) => size}px;
  color: ${Color.cinza900};
  font-family: ${Fonts.secundary};
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => `${lineHeight}`}; ;
`
