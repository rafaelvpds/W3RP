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
    cursor: pointer;
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
    cursor: pointer;
  }
  &.modalFilter {
    background: #001c98;
    color: #ffffff;
    border: none;
    border-radius: 16px;
    font-weight: 600;
    width: 200px;
    height: 30px;
    cursor: pointer;
  }
`
