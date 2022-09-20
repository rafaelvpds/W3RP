import styled from 'styled-components'

export const WarperTitle = styled.div`
  display: flex;
`
export const WarperButton = styled.div``

export const BackgroundTable = styled.div`
  height: 490px;
  width: 490px;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0px 7px 30px rgba(187, 192, 205, 0.4);
  padding: 10px;
`
export const IconTable = styled.span<{ isClient: boolean }>`
  background: ${({ isClient }) => (isClient ? '#001C98' : '#C5CFFF')};
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`
export const TableTitle = styled.span`
  font-size: 20px;
  line-height: 28px;
  color: #212121;
`

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
    padding: 15px 5px;
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
