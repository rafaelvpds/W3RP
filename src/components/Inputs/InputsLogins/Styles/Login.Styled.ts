import styled from 'styled-components'
import { Color } from '../../../../theme/colors'
import { Fonts } from '../../../../theme/fonts'

export const InputLogin = styled.input`
  height: 56px;
  width: 400px;
  margin: 15px 0;
  border-radius: 16px;
  padding: 0 30px;
  border: 1px solid ${Color.cinza300};
  background: ${Color.branco};
  font-family: ${Fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${Color.cinza900};

  &::placeholder {
    font-family: ${Fonts.primary};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: ${Color.cinza400};
  }
`
export const LabelCheck = styled.label`
  font-family: ${Fonts.primary};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
`
export const SpanForgotPass = styled.span`
  font-family: ${Fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${Color.cinza700};
  cursor: pointer;
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
