import { useNavigate } from 'react-router-dom'
import { IconChevronRight } from '../../assets/icons/IconChevronRight'
import { IconSearch } from '../../assets/icons/IconSearch'

import { InputPredicao } from '../../components/inputsPredicoes/InputPredicao'
import { TableDataPredicao } from '../../components/TablePredicao/TableDataPredicao'
import { STDPred } from '../../components/TablePredicao/TablePred.Styled'
import { TitePages } from '../../components/TitlePred/TitlePredicoes.Styled'
import { TitleCardPred } from '../../components/TitlePred/TitlePred'
import {
  ButtonPred,
  ContainerDataPred,
  ContainerTablePred,
  ContainerTitleCardPred,
  ContainerTopPred,
  DivButtonPred,
  DivContentTablePred,
  DivTablePred,
} from './Predicao.Styled'
import { IconUser } from '../../assets/icons/IconUser'

export function Predicao() {
  const navigator = useNavigate()
  const filter = () => {
    console.log('Deu certo')
  }

  const nextPage = (id: string) => {
    navigator(`/historico/${id}`)
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
      <TitePages size={32}>Predições</TitePages>
      <ContainerTopPred>
        <InputPredicao
          onChange={filter}
          placeholder="Pesquise uma palavra-chave"
          icon={<IconSearch />}
        />
      </ContainerTopPred>

      <DivContentTablePred>
        <ContainerTablePred>
          <ContainerTitleCardPred>
            <TitleCardPred
              icon={<IconUser color="#001C98" />}
              text="Hermes Pardini"
            />
            <DivButtonPred>
              <ButtonPred onClick={() => nextPage('1')} type="button">
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

        <ContainerTablePred>
          <ContainerTitleCardPred>
            <TitleCardPred
              icon={<IconUser color="#001C98" />}
              text="Hermes Pardini"
            />

            <DivButtonPred>
              <ButtonPred onClick={() => nextPage('2')} type="button">
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

        <ContainerTablePred>
          <ContainerTitleCardPred>
            <TitleCardPred
              icon={<IconUser color="#001C98" />}
              text="Hermes Pardini"
            />
            <DivButtonPred>
              <ButtonPred onClick={() => nextPage('3')} type="button">
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
        <ContainerTablePred>
          <ContainerTitleCardPred>
            <TitleCardPred
              icon={<IconUser color="#001C98" />}
              text="Hermes Pardini"
            />
            <DivButtonPred>
              <ButtonPred onClick={() => nextPage('3')} type="button">
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
        <ContainerTablePred>
          <ContainerTitleCardPred>
            <TitleCardPred
              icon={<IconUser color="#001C98" />}
              text="Hermes Pardini"
            />
            <DivButtonPred>
              <ButtonPred onClick={() => nextPage('3')} type="button">
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
        <ContainerTablePred>
          <ContainerTitleCardPred>
            <TitleCardPred
              icon={<IconUser color="#001C98" />}
              text="Hermes Pardini"
            />
            <DivButtonPred>
              <ButtonPred onClick={() => nextPage('3')} type="button">
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
      </DivContentTablePred>
    </>
  )
}
