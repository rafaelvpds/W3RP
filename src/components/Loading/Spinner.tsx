import {
  ContainerSpiner,
  SpinerCircle,
  SpinerStyled,
} from './Styles/Spiner.Styled'

export function Spiner() {
  return (
    <ContainerSpiner>
      <SpinerCircle>
        <SpinerStyled />
      </SpinerCircle>
    </ContainerSpiner>
  )
}
