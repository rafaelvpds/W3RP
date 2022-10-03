import styled from 'styled-components'
import { Color } from '../../types/colors'

export const ContainerProduct = styled.div`
  background: ${Color.branco};
  border-radius: 24px;
  padding: 20px;
`

export const DivContainerInput = styled.div`
  display: flex;
  align-items: center;
  border-radius: 15px;
  padding: 20px 0px 20px 16px;
  width: 100%;
`
export const DivButtonFilter = styled.div`
  position: relative;
`
export const WarperModalFilter = styled.div`
  position: relative;
`

export const ButtonDropFilter = styled.button`
  background: ${Color.cinza100};
  border: 1px solid ${Color.cinza100};
  padding: 5px;
  border-radius: 10px;
  text-align: center;
  margin-left: 15px;
  cursor: pointer;
`
export const ModalFilterProduct = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  width: 220px;
  background: ${Color.branco};
  box-shadow: 0px 7px 30px rgba(187, 192, 205, 0.4);
  border-radius: 16px;
  padding: 10px 0px 10px 10px;
`
export const SpanTitleFilter = styled.span`
  color: ${Color.cinza900};
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  padding-left: 5px;
`
export const LineModal = styled.hr`
  margin-top: 5px;
`
export const SpanSubtitleFilter = styled.span`
  color: ${Color.cinza900};
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  padding-left: 5px;
`
