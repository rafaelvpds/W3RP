import styled from 'styled-components'
import { Fonts } from '../../../theme/fonts'

export const Content = styled.h1<{ isSubtitle: boolean }>`
  font-size: ${({ isSubtitle }) => (isSubtitle ? '20px' : '36px')};
  font-family: ${Fonts.secundary};
  font-weight: ${({ isSubtitle }) => (isSubtitle ? 400 : 700)};
  line-height: 140%;
  font-style: normal;
  margin-bottom: 20px;
`
