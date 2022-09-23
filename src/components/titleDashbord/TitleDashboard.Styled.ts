import styled from 'styled-components'

export const Title = styled.h1<{ isSubtitle: boolean; color: string }>`
  font-size: ${({ isSubtitle }) => (isSubtitle ? '20px' : '32px')};
  color: ${({ color }) => `${color}`};
  margin-bottom: 32px;
`
