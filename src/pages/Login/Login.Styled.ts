import styled from 'styled-components'
import { Color } from '../../types/colors'

export const ContenerLogin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`
export const ContainerInput = styled.div`
  position: relative;
`
export const ContainerLabel = styled.div`
  position: absolute;
  top: 2px;
  left: 30px;
  background: ${Color.branco};
  color: ${Color.cinza600};
`
export const ContainerSapan = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0 20px;
  color: ${Color.cinza700};
`
export const SpanPassword = styled.span`
  color: ${Color.cinza900};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
`
export const ImagemLateral = styled.img`
  height: 100vh;
`
