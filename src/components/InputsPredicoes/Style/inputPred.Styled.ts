import styled from 'styled-components'
import { Color } from '../../../theme/colors'

export const ContainerPredicao = styled.div`
  background: ${Color.branco};
`
export const ContainerInput = styled.div`
  position: relative;
`
export const ContainerIconSeach = styled.div`
  position: absolute;
  top: 17px;
  right: 10px;
`
export const ButtonIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

export const InputPred = styled.input`
  border: 1.5px solid ${Color.cinza300};
  border-radius: 16px;
  width: 400px;
  height: 56px;
  padding-left: 10px;
  &::placeholder {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: ${Color.cinza600};
  }
`
