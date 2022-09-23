import styled from 'styled-components'

export const TitePages = styled.h1<{ size: number }>`
  font-size: ${({ size }) => size}px;
  color: #212121;
`
