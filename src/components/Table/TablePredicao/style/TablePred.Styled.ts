import styled from 'styled-components'
import { Color } from '../../../../theme/colors'

export const STablePred = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  overflow: hidden;
  tr td {
    padding: 5px 1px;
  }
`
export const STHeadTRPred = styled.thead`
  tr {
    color: #796ce0;
  }
`
export const STHPred = styled.th`
  &:nth-child(1) {
    text-align: left;
  }
`
export const STDPred = styled.td`
  &:nth-child(1) {
    text-align: left;
    line-height: 19.6px;
  }
  &:nth-child(2) {
    color: ${Color.cinza800};
    font-weight: 600;
    line-height: 19.6px;
  }
`
