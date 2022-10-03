import styled from 'styled-components'
import { Color } from '../../types/colors'

export const TitePages = styled.h1<{ size: number }>`
  font-size: ${({ size }) => size}px;
  color: ${Color.cinza900};
`
