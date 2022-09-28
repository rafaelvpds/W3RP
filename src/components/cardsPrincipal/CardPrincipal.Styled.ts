import styled from 'styled-components'

export const DivTitleDashboard = styled.div`
  display: flex;
  justify-content: space-between;
`
export const SelectData = styled.select`
  width: 200px;
  height: 40px;
  border-radius: 8px;
  color: #001c98;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
`

export const ContainerCardPrincipal = styled.div<{
  backgroundCard: string
}>`
  padding: 30px;
  background: ${({ backgroundCard }) => `${backgroundCard}`};
  border-radius: 24px;
  margin-bottom: 40px;
`
