import styled from 'styled-components'
import { Color } from '../../types/colors'

export const STableProduct = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;

  tbody > tr:nth-child(even),
  th > th:nth-child(even) {
    background-color: ${Color.cinza100};
  }
  tr td {
    padding: 15px 5px;
  }
`
export const STRProduct = styled.tr`
  background: ${Color.primary};
  color: #c5cfff;
  font-size: 16px;
  font-weight: 600;
`

export const StatusProduct = styled.div<{
  bacgroundStatus: string
  colorStatus: string
}>`
  background: ${({ bacgroundStatus }) => `${bacgroundStatus}`};
  color: ${({ colorStatus }) => `${colorStatus}`};
  text-align: center;
  font-size: 16px;
  padding: 5px;
  display: inline-block;
  border-radius: 8px;
  font-weight: 400;
  letter-spacing: 0.2px;
`
