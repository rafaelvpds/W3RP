import styled from 'styled-components'

export const Content = styled.h1<{ isSubtitle: boolean }>`
  font-size: ${({ isSubtitle }) => (isSubtitle ? '20px' : '36px')};
`
