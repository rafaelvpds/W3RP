import styled from 'styled-components'
import { Color } from '../../theme/colors'

export const ButtonChevron = styled.button`
  border: none;
  padding: 7px;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: ${Color.cinza200};
`

export const DivTopHistorico = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 32px;
`
export const ContainerInfoClient = styled.div`
  position: relative;

  background-color: ${Color.primary};

  border-radius: 24px;
  margin-bottom: 32px;
`
export const ContainerInfoHist = styled.div`
  display: flex;
  gap: 20px;
`
export const ButtonDetalhesCheck = styled.button`
  width: 40px;
  height: 40px;
  background: ${Color.branco};
  padding: 7px;
  border: 1px solid ${Color.cinza300};
  border-radius: 100%;
`
export const FundoImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  border-radius: 30px;
`
