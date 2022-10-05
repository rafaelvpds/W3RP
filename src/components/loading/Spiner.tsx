import {
  ContainerSpiner,
  SpinerCircle,
  SpinerStyled,
} from './Style/Spiner.Styled'

export function Spiner() {
  return (
    <ContainerSpiner>
      <SpinerCircle>
        <SpinerStyled />
      </SpinerCircle>
    </ContainerSpiner>
  )
}
