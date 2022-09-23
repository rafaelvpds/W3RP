import styled from 'styled-components'

export const STableProduct = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  overflow: hidden;

  tbody > tr:nth-child(even),
  th > th:nth-child(even) {
    background-color: #f5f5f5;
  }
  tr td {
    padding: 15px 5px;
  }
`
export const STRProduct = styled.tr`
  background: #001c98;
  color: #c5cfff;
  font-size: 16px;
  font-weight: 600;
`

export const StatusProduct = styled.p<{
  bacgroundStatus: string
  colorStatus: string
}>`
  width: 80px;
  height: 40px;
  background: ${({ bacgroundStatus }) => `${bacgroundStatus}`};
  color: ${({ colorStatus }) => `${colorStatus}`};
  text-align: center;
  font-size: 16px;
  padding-top: 8px;
  border-radius: 8px;

  font-weight: 400;
  letter-spacing: 0.2px;
`
