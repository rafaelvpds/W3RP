import styled from 'styled-components'
import { Color } from '../../types/colors'

export const ContainerTopPred = styled.div`
  display: flex;
  align-items: center;
  border-radius: 24px;
  padding: 20px 0px 20px 16px;
  width: 100%;
  height: 100px;
  background: ${Color.branco};
`

export const DivContentTablePred = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow-y: scroll;
  height: 284px;
`
export const ContainerTablePred = styled.div`
  background: ${Color.branco};
  box-shadow: 0px 0px 25px rgba(163, 163, 163, 0.2);
  border-radius: 24px;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  width: 30%;
`

export const ContainerTitleCardPred = styled.div`
  position: relative;
  padding: 10px;
`
export const DivButtonPred = styled.div`
  position: absolute;
  top: 24px;
  right: 0px;
`
export const ContainerTitulPred = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const ButtonPred = styled.button`
  background: none;
  border: none;
`

export const SpanIconTablePred = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background: ${Color.azul4};
  border-radius: 100%;
`
export const TiteDataPred = styled.h1`
  font-size: 16px;
  color: ${Color.cinza900};
`
export const ContainerDataPred = styled.div`
  background: ${Color.cinza200};
  border-radius: 16px;
  opacity: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  padding-left: 10px;
`
export const DivTablePred = styled.div`
  display: flex;
  justify-content: center;
`
