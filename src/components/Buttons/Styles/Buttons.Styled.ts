import styled from 'styled-components'
import { Color } from '../../../theme/colors'

export const ActionsButtons = styled.button`
  &.faleConosco {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 140px;
    border: none;
    background: ${Color.primary};
    color: ${Color.branco};
    padding: 12px 50px;
    border-radius: 100px;
    font-weight: 600;
    cursor: pointer;
  }
  &.login {
    background: ${Color.primary};
    padding: 12px 64px;
    color: ${Color.branco};
    border: none;
    border-radius: 16px;
    font-weight: 600;
    width: 400px;
    height: 56px;
    cursor: pointer;
  }
  &.modalFilter {
    background: ${Color.primary};
    color: ${Color.branco};
    border: none;
    border-radius: 16px;
    font-weight: 600;
    width: 200px;
    height: 30px;
    cursor: pointer;
  }
`
