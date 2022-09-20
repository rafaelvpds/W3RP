import styled from 'styled-components'

export const Title = styled.h1<{ isSubtitle: boolean }>`
  font-size: ${({ isSubtitle }) => (isSubtitle ? '20px' : '32px')};
  color: #ffffff;
  margin-bottom: 20px;
`
