import styled from 'styled-components'

export const WarperTitleTable = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px;
`
export const WarperTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const WarperButton = styled.div`
  display: flex;
  align-items: center;

  padding: 10px;
  background: #f5f5f5;
  border-radius: 15px;
`
export const ButtonAlta = styled.button`
  width: 65px;
  height: 30px;
  border: none;
  border-radius: 8px;
  background: #00c247;
  color: #ffffff;
`
export const ButtonBaixa = styled.button`
  width: 65px;
  height: 30px;
  border: none;
  border-radius: 8px;
  background: #ff3333;
  color: #ffffff;
`

export const BackgroundTable = styled.div<{ height: string; widht: string }>`
  height: ${({ height }) => height};
  width: ${({ widht }) => widht};
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0px 7px 30px rgba(187, 192, 205, 0.4);
  padding: 10px;
`
export const IconTable = styled.span<{ color: string }>`
  background-color: ${({ color }) => color};
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`
export const TableTitle = styled.span<{ colorText: string }>`
  font-size: 20px;
  line-height: 28px;
  color: ${({ colorText }) => colorText};
  /* color: #212121; */
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
export const ButtonDetalhes = styled.button`
  background: none;
  border: none;
`
