import styled from 'styled-components'
import { Color } from '../../../theme/colors'

export const ConteinerModalFilter = styled.div`
  display: flex;
`

export const DivFilterModal = styled.div``
export const ContendModal = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 5px;
`

export const DivTypeFilter = styled.div`
  padding: 5px;
`
export const SpanTypeFilter = styled.span<{ checked: boolean }>`
  margin-left: 10px;
  color: ${Color.cinza900};
  font-weight: ${({ checked }) => (checked ? 600 : 400)};
  font-size: 16px;
  line-height: 150%;
`
export const SpanTotalFilter = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: ${Color.cinza600};
`
export const DivButtonModalFilter = styled.div`
  display: flex;
  justify-content: center;
`
