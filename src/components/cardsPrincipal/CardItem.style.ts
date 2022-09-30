import styled from 'styled-components'

export const WarperCard = styled.div`
  display: flex;
  gap: 5px;
`

export const CardSecundario = styled.div<{
  backgroundCardItem: string
  colorCardItem: string
}>`
  border-radius: 24px;
  background: ${({ backgroundCardItem }) => `${backgroundCardItem}`};
  display: flex;
  color: ${({ colorCardItem }) => `${colorCardItem}`};
  padding: 10px;
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

export const TagStyle = styled.div<{ value: number; colorTag: string }>`
  width: 60px;
  height: 24px;
  background: ${({ value }) => (value < 0 ? '#FF3333' : '#00C247')};
  border-radius: 100px;
  color: ${({ colorTag }) => `${colorTag}`};
  text-align: center;
  padding: 2px, 13px, 2px, 13px;
`
export const TitleCard = styled.span<{ colorTextCard: string }>`
  font-weight: 600;
  font-size: 11px;
  line-height: 24px;
  color: ${({ colorTextCard }) => `${colorTextCard}`};
`
export const ValueData = styled.span`
  font-size: 30px;
  font-weight: 600;
  line-height: 48px;
  margin-left: 5px;
`
