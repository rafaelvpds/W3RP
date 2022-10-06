import styled from 'styled-components'
import { Color } from '../../../theme/colors'
import { Fonts } from '../../../theme/fonts'

export const DivTitleDashboard = styled.div`
  display: flex;
  justify-content: space-between;
`
export const WarperCard = styled.div`
  display: flex;
  gap: 30px;
`
export const SelectData = styled.select`
  height: 40px;
  border-radius: 8px;
  color: ${Color.primary};
  font-family: ${Fonts.primary};
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  border: none;
`
export const DivSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  font-family: ${Fonts.primary};
  background: ${Color.branco};
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  padding-left: 20px;
  height: 40px;
  border-radius: 8px;
  gap: 8px;
`

export const ContainerCardPrincipal = styled.div<{
  backgroundCard: string
}>`
  padding: 30px;
  background: ${({ backgroundCard }) => `${backgroundCard}`};
  border-radius: 24px;
  margin-bottom: 40px;
`
