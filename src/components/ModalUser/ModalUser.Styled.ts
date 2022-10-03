import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Color } from '../../types/colors'

export const WarperModalUser = styled.div`
  width: 200px;
  height: 100px;
  padding: 14px 10px 0px 10px;
  background: ${Color.branco};
  box-shadow: 0px 7px 20px rgba(187, 192, 205, 0.4);
  border-radius: 24px;
`
export const ContentModalUser = styled.div`
  display: flex;
  flex-direction: column;
`
export const ContainerConfig = styled.div`
  display: flex;
`
export const ContainerLogout = styled.div`
  display: flex;
  margin-top: 10px;
`
export const LinkLogOut = styled(Link)`
  text-decoration: none;

  &:active {
    color: ${Color.cinza600};
  }
`

export const LineModalUser = styled.hr`
  background: ${Color.cinza200};
`

export const SpanTextConfig = styled.span`
  margin: 0px 20px 0px 10px;
`
// 0px 20px 0px 10px
