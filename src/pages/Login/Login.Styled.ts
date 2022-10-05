import styled from 'styled-components'
import { Color } from '../../theme/colors'
import { Fonts } from '../../theme/fonts'

export const SubTitle = styled.h1`
  font-size: 20px;
  font-family: ${Fonts.secundary};
  font-weight: 400;
  line-height: 28px;
  font-style: normal;
`
export const Title = styled.h1`
  font-size: 36px;
  font-family: ${Fonts.secundary};
  font-weight: 700;
  line-height: 140%;
  font-style: normal;
  margin-bottom: 20px;
`

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
export const LabelLogin = styled.label`
  font-family: ${Fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
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
