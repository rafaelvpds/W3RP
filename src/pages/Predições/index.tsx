import { IconChevronRight } from '../../assets/icons/IconChevronRight'
import { IconSearch } from '../../assets/icons/IconSearch'
import { IconUserPred } from '../../assets/icons/IconUserPred'
import { InputPredicao } from '../../components/inputsPredicoes/InputPredicao'
import { TableDataPredicao } from '../../components/TablePredicao/TableDataPredicao'
import { STDPred } from '../../components/TablePredicao/TablePred.Styled'
import { TitePredicoes } from '../../components/titleDashbord/TitlePredicoes.Styled'
import { TitleCardPred } from '../../components/TitlePred/TitlePred'
import {
  ButtonPred,
  ContainerDataPred,
  ContainerTablePred,
  ContainerTitleCardPred,
  ContainerTopPred,
  DivButtonPred,
  DivTablePred,
} from './Predicao.Styled'

export function Predicao() {
  const filter = () => {
    console.log('Deu certo')
  }

  const nextPage = () => {
    alert('Deu Certo')
  }

  const MokupProduct = [
    {
      nameProduct: 'Papel higiênico',
      data: '02/09/22',
    },
    {
      nameProduct: 'Água sanitária',
      data: '05/09/22',
    },
    {
      nameProduct: 'Papel higiênico',
      data: '10/09/22',
    },
  ]
  return (
    <>
      <TitePredicoes>Predições</TitePredicoes>
      <ContainerTopPred>
        <InputPredicao
          onChange={filter}
          placeholder="Pesquise uma palavra-chave"
          icon={<IconSearch />}
        />
      </ContainerTopPred>

      <ContainerTablePred>
        <ContainerTitleCardPred>
          <TitleCardPred icon={<IconUserPred />} text="Hermes Pardini" />

          <DivButtonPred>
            <ButtonPred onClick={nextPage} type="button">
              <IconChevronRight />
            </ButtonPred>
          </DivButtonPred>
        </ContainerTitleCardPred>
        <DivTablePred>
          <ContainerDataPred>
            <TableDataPredicao headers={['Produto', 'Próx.Compras']}>
              {MokupProduct.map(item => (
                <tr>
                  <STDPred>{item.nameProduct}</STDPred>
                  <STDPred>{item.data}</STDPred>
                </tr>
              ))}
            </TableDataPredicao>
          </ContainerDataPred>
        </DivTablePred>
      </ContainerTablePred>
    </>
  )
}
