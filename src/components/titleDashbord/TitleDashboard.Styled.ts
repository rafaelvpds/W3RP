import styled from 'styled-components'

export const Title = styled.h1<{
  isSubtitle: boolean
  color: string
  fontWeight: string
  lineHeight: string
}>`
  font-size: ${({ isSubtitle }) => (isSubtitle ? '20px' : '32px')};
  color: ${({ color }) => `${color}`};
  margin-bottom: 32px;
  font-family: 'Sora';
  font-style: normal;
  font-weight: ${({ fontWeight }) => `${fontWeight}`};
  line-height: ${({ lineHeight }) => `${lineHeight}`};
`
