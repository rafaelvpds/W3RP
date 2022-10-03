import styled from 'styled-components'
import { Color } from '../../types/colors'

export const InputLogin = styled.input`
  height: 56px;
  width: 400px;
  margin: 15px 0;
  border-radius: 16px;
  padding: 0 30px;
  border: 1px solid ${Color.cinza300};
`
export const ButtonEyes = styled.button`
  border: none;
  background: none;
  color: ${Color.cinza400};
`
export const ContainerInput = styled.div`
  position: relative;
`
export const ContainerButton = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
`
