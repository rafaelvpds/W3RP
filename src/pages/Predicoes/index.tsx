import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
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
import { PredictionPage } from '../../types'
import { GetPrediction } from '../../services/Predicao'

export function Predicao() {
  const navigator = useNavigate()
  const [dataClient, setDataClients] = useState<PredictionPage>()

  const getPrediction = async () => {
    const dataPrediction = await GetPrediction()
    setDataClients(dataPrediction)
  }

  useEffect(() => {
    getPrediction()
  }, [])
  const filter = () => {
    console.log('Deu certo')
  }

  const nextPage = (id: number) => {
    navigator(`/historico/${id}`)
  }

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
        {dataClient?.content.map(item => (
          <ContainerTablePred>
            <ContainerTitleCardPred>
              <TitleCardPred
                icon={<IconUser color="#001C98" />}
                text={item.nome}
              />
              <DivButtonPred>
                <ButtonPred onClick={() => nextPage(item.id)} type="button">
                  <IconChevronRight />
                </ButtonPred>
              </DivButtonPred>
            </ContainerTitleCardPred>
            <DivTablePred>
              <ContainerDataPred>
                <TableDataPredicao headers={['Produto', 'Próx.Compras']}>
                  {item.produtos.map(itens => (
                    <tr>
                      <STDPred>{itens.nome}</STDPred>
                      <STDPred>{itens.proximaCompra}</STDPred>
                    </tr>
                  ))}
                </TableDataPredicao>
              </ContainerDataPred>
            </DivTablePred>
          </ContainerTablePred>
        ))}
      </DivContentTablePred>
    </>
  )
}
