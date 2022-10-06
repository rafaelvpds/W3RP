import styled from 'styled-components'
import { Color } from '../../../theme/colors'

export const Container = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 26px;
  input:checked ~ .checkmark {
    //Colocar aqui a cor do seu sistema!
    border: 2px solid ${Color.cinza400}; //Colocar aqui a cor do seu sistema!
    &.container input:checked ~ .checkmark:after {
      display: block;
    }
    &.checkmark:after {
      left: 6px;
      top: 1px;
      width: 8px;
      height: 14px;
      border: solid ${Color.branco};
      border-radius: 2px 2px;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`
export const CheckboxStyled = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`
export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  background-color: #fff;
  border: 2px solid gray;
  border-radius: 5px;
  &.after {
    content: '';
    position: absolute;
    display: none;
  }
`
