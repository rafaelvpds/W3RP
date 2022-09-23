import styled from 'styled-components'

export const ContainerCardPrincipal = styled.div<{
  widthCard: string

  backgroundCard: string
}>`
  width: ${({ widthCard }) => `${widthCard}`};
  padding: 30px;
  background: ${({ backgroundCard }) => `${backgroundCard}`};
  border-radius: 24px;
  margin-bottom: 40px;
`
