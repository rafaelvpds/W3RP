import styled from 'styled-components'
import { Color } from '../../types/colors'

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
`
