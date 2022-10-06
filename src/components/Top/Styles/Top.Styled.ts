import styled from 'styled-components'
import { Color } from '../../../theme/colors'

export const TopUser = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 130px;
  background-color: ${Color.branco};
`
export const DivMenu = styled.div`
  display: flex;
  align-items: center;
`
export const ButtonIconMenu = styled.button`
  background: none;
  border: none;
  margin-left: 19px;
  cursor: pointer;
`
export const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 37px 48px;
  position: relative;
`
export const ButtonChevronDown = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`
export const DivIcon = styled.div`
  display: flex;
  width: 56px;
  height: 56px;
  background: ${Color.primary};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`
export const ContainerModalUser = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
`
