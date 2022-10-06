import styled from 'styled-components'
import { Color } from '../../../../theme/colors'
import { Fonts } from '../../../../theme/fonts'

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
  background: ${Color.cinza100};
  border-radius: 15px;
`
export const ButtonAlta = styled.button`
  width: 65px;
  height: 30px;
  border: none;
  border-radius: 4px;
  font-family: ${Fonts.primary};
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  background: ${Color.sucesso};
  color: ${Color.branco};
  cursor: pointer;
`
export const ButtonBaixa = styled.button`
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 4px;
  font-family: ${Fonts.primary};
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  background: ${Color.erro};
  color: ${Color.branco};
  cursor: pointer;
`

export const BackgroundTable = styled.div<{ widht: string }>`
  width: ${({ widht }) => widht};
  border-radius: 24px;
  background: ${Color.branco};
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

  color: ${({ colorText }) => colorText};
  font-family: ${Fonts.secundary};
  font-style: normal;
  font-weight: 600;

  line-height: 140%;
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
    background-color: ${Color.cinza100};
  }
  tr td {
    padding: 15px 5px;
  }
`
export const STHeadTR = styled.tr`
  background: ${Color.primary};
  color: ${Color.azul4};
  font-size: 16px;
  font-weight: 600;
  font-family: ${Fonts.primary};
`
export const STH = styled.th`
  &:nth-child(2) {
    text-align: left;
  }
`

type StdProps = {
  center?: boolean
}
export const STD = styled.td<StdProps>`
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  font-family: ${Fonts.primary};
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${Color.cinza900};
`
export const ButtonDetalhes = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`
