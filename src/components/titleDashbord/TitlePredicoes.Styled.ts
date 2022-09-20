import styled from 'styled-components'

export const TitePredicoes = styled.h1<{ isTitleCard: boolean }>`
  font-size: ${({ isTitleCard }) => (isTitleCard ? '16px' : '32px')};
  color: #212121;
  margin-bottom: 32px;
`
