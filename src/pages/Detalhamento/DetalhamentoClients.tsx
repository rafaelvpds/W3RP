import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IconChevronLeft } from '../../assets/icons/IconChevronLeft'
import { IconTrendingDown } from '../../assets/icons/IconTrendingDown'
import { IconTrendingUp } from '../../assets/icons/IconTrendingUp'

import { CardPrincipal } from '../../components/Cards/CardsPrincipal/CardPrincipal'
import { ViewDataTable } from '../../components/Table/TableDashboard/DataTable'
import { STD } from '../../components/Table/TableDashboard/Style/TableDashboard.Styled'
import { TitePages } from '../../components/Title/TitlePages/TitlePages.Styled'
import { GetPredicaoClients } from '../../services/ClientsPredicao'
import { GetResumeClients } from '../../services/ResumeClients'
import { PredicaoClient, ResumoPredicaoClients } from '../../types'
import { Color } from '../../theme/colors'
import { ButtonChevron, DivTopHistorico } from '../Predicoes/Historico.Styled'
import { ContainerTableAround } from './Detalhamento.Styled'
import { CardItem } from '../../components/Cards/CardItem/CardItem'

export function DetalhamentoClients() {
  const [predicaoAlta, setPredicaoAlta] = useState<PredicaoClient[]>([])
  const [predicaoBaixa, setPredicaoBaixa] = useState<PredicaoClient[]>([])
  const [resumClient, setResumClient] = useState<ResumoPredicaoClients>()
  const { id } = useParams()

  const getPredClientsAlta = async () => {
    const data = await GetPredicaoClients(id!, 'EM_ALTA')
    setPredicaoAlta(data)
  }
  useEffect(() => {
    getPredClientsAlta()
  }, [])

  const getPredClientsBaixa = async () => {
    const data = await GetPredicaoClients(id!, 'EM_BAIXA')
    setPredicaoBaixa(data)
  }
  useEffect(() => {
    getPredClientsBaixa()
  }, [])

  const ResumPredCliente = async () => {
    const dataResumePredClient = await GetResumeClients(id!)
    setResumClient(dataResumePredClient)
  }
  useEffect(() => {
    ResumPredCliente()
  }, [])
  return (
    <>
      <DivTopHistorico>
        <ButtonChevron>
          <IconChevronLeft />
        </ButtonChevron>

        <TitePages fontWeight={400} lineHeight="140%" size={20}>
          Detalhamento
        </TitePages>
      </DivTopHistorico>
      <CardPrincipal
        fontWeight="700"
        lineHeight="140%"
        text={resumClient?.nome || ''}
        color={`${Color.primary}`}
        backgroundCard={`${Color.cinza100}`}
      >
        <CardItem
          backgroundCardItem={`${Color.azul1}`}
          colorCardItem={`${Color.azul4}`}
          colorTextCard={`${Color.branco}`}
          text="M??dia 120 dias"
          value={resumClient?.media120Dias}
        />
        <CardItem
          backgroundCardItem={`${Color.branco}`}
          colorCardItem={`${Color.primary}`}
          colorTextCard={`${Color.cinza900}`}
          text="??ltimos 30 dias"
          value={resumClient?.ultimos30Dias}
          tag={resumClient?.percentualUltimos30Dias}
        />
        <CardItem
          backgroundCardItem={`${Color.branco}`}
          colorCardItem={`${Color.primary}`}
          colorTextCard={`${Color.cinza900}`}
          text="??ltimos 60 dias"
          value={resumClient?.ultimos60Dias}
        />
        <CardItem
          backgroundCardItem={`${Color.branco}`}
          colorCardItem={`${Color.primary}`}
          colorTextCard={`${Color.cinza900}`}
          text="??ltimos 90 dias"
          value={resumClient?.ultimos90Dias}
        />
        <CardItem
          backgroundCardItem={`${Color.branco}`}
          colorCardItem={`${Color.primary}`}
          colorTextCard={`${Color.cinza900}`}
          text="??ltimos 120 dias"
          value={resumClient?.ultimos120Dias}
        />
      </CardPrincipal>
      <ContainerTableAround>
        <ViewDataTable
          colorText={`${Color.cinza900}`}
          widht="515px"
          hasButton={false}
          headers={['ID', 'Cliente', 'Percetual', 'Qtd.']}
          icon={<IconTrendingDown />}
          text="Clientes em baixa"
          color={`${Color.erro}`}
        >
          {predicaoBaixa.map(item => (
            <tr key={item.id}>
              <STD>{item.id}</STD>
              <STD>{item.nome}</STD>
              <STD center>
                {item.percentual > 0 && '+'} {item.percentual}%
              </STD>
              <STD>{item.quantidade}</STD>
            </tr>
          ))}
        </ViewDataTable>
        <ViewDataTable
          colorText={`${Color.cinza900}`}
          widht="515px"
          hasButton={false}
          headers={['ID', 'Cliente', 'Percetual', 'Qtd.']}
          icon={<IconTrendingUp />}
          text="Clientes em alta"
          color={`${Color.sucesso}`}
        >
          {predicaoAlta.map(item => (
            <tr key={item.id}>
              <STD>{item.id}</STD>
              <STD>{item.nome}</STD>
              <STD center>
                {item.percentual > 0 && '+'} {item.percentual}%
              </STD>
              <STD>{item.quantidade}</STD>
            </tr>
          ))}
        </ViewDataTable>
      </ContainerTableAround>
    </>
  )
}
