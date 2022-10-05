import styled from 'styled-components'
import { Color } from '../../../theme/colors'

export const DivPagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`
export const SpanQtdeLista = styled.span`
  margin-right: 20px;
  color: ${Color.cinza500};
`
export const DivNextPage = styled.div`
  display: flex;
`
export const SpanNumPage = styled.span`
  color: ${Color.cinza500};
  width: 24px;
  height: 24px;
  text-align: center;
  cursor: pointer;
  &.active {
    background: ${Color.primary};
  }
  border-radius: 4px;
  margin-right: 15px;
`
export const ButtonIconPage = styled.button`
  background: none;
  border: none;
  padding-top: 3px;
  cursor: pointer;
`
