import styled from 'styled-components'

export const ActionsButtons = styled.button`
  &.faleConosco {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 140px;
    border: none;
    background: #001c98;
    color: #ffffff;
    padding: 12px 50px;
    border-radius: 100px;
    font-weight: 600;
  }
  &.login {
    background: #001c98;
    padding: 12px 64px;
    color: #ffffff;
    border: none;
    border-radius: 16px;
    font-weight: 600;
    width: 400px;
    height: 56px;
  }
  &.statusAlta {
    width: 65px;
    height: 30px;
    border: none;
    border-radius: 8px;
    background: #00c247;
    color: #ffffff;
  }
  &.statusBaixa {
    width: 65px;
    height: 30px;
    border: none;
    border-radius: 8px;
    background: #ff3333;
    color: #ffffff;
  }
`
