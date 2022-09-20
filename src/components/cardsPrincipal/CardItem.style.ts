import styled from 'styled-components'

export const WarperCard = styled.div`
  display: flex;
  gap: 5px;
`

export const CardSecundario = styled.div`
  height: 124px;
  width: 220px;
  border-radius: 24px;
  background: #02156a;
  display: flex;
  color: #c5cfff;
`

export const ContainerGraphic = styled.div`
  display: flex;
  align-items: center;
`
export const ContainerValueCard = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const ContainerInfoCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const TagStyle = styled.div<{ value: number }>`
  width: 60px;
  height: 24px;
  background: ${({ value }) => (value < 0 ? '#FF3333' : '#00C247')};
  border-radius: 100px;
  text-align: center;
  padding: 2px, 13px, 2px, 13px;
`
export const TitleCard = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
`
export const ValueData = styled.span`
  font-size: 30px;
  font-weight: 600;
  line-height: 48px;
`
