import styled from 'styled-components'

export const STable = styled.table`
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
    padding: 20px 5px;
  }
`
export const STHead = styled.thead``
export const STHeadTR = styled.tr`
  background: #001c98;
  color: #c5cfff;
  font-size: 16px;
  font-weight: 600;
`
export const STH = styled.th`
  &:nth-child(2) {
    text-align: left;
  }
`
export const STBody = styled.tbody``
export const STBodyTR = styled.tr``

type StdProps = {
  center?: boolean
}
export const STD = styled.td<StdProps>`
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`
