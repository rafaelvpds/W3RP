import styled from 'styled-components'
import { Color } from '../../../theme/colors'

export const CotainerDataClients = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 0px 25px 25px;
  gap: 10px;
`
export const ContainerSpanClients = styled.div`
  display: flex;
  gap: 10px;
`
export const TitleClient = styled.span`
  font-size: 32px;
  line-height: 48px;
  font-weight: 600;
  color: ${Color.branco};
`
export const SpanDataClient = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${Color.branco};
`
