import { IconSearch } from '../../assets/icons/IconSearch'
import { InputPredicao } from '../../components/inputsPredicoes/InputPredicao'
import { TitePredicoes } from '../../components/titleDashbord/TitlePredicoes.Styled'
import { ContainerPred } from './Predicao.Styled'

export function Predicao() {
  const filter = () => {
    console.log('Deu certo')
  }
  return (
    <>
      <TitePredicoes isTitleCard={false}>Predições</TitePredicoes>
      <ContainerPred>
        <InputPredicao
          onChange={filter}
          placeholder="Pesquise uma palavra-chave"
          icon={<IconSearch />}
        />
      </ContainerPred>
    </>
  )
}
