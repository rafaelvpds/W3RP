import styled from 'styled-components'

export const DivPagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`
export const SpanQtdeLista = styled.span`
  margin-right: 20px;
  color: #9e9e9e;
`
export const DivNextPage = styled.div`
  display: flex;
`
export const SpanNumPage = styled.span`
  color: #9e9e9e;
  width: 24px;
  height: 24px;
  text-align: center;
  &.active {
    background: #001c98;
  }
  border-radius: 4px;
  margin-right: 15px;
`
export const ButtonIconPage = styled.button`
  background: none;
  border: none;
  padding-top: 3px;
`
