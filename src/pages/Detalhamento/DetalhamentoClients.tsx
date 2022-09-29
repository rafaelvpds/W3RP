import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IconChevronLeft } from '../../assets/icons/IconChevronLeft'
import { IconTrendingDown } from '../../assets/icons/IconTrendingDown'
import { IconTrendingUp } from '../../assets/icons/IconTrendingUp'
import { CardItem } from '../../components/CardsPrincipal/CardItem'
import { CardPrincipal } from '../../components/CardsPrincipal/CardPrincipal'
import { ViewDataTable } from '../../components/Table/DataTable'
import { STD } from '../../components/Table/TableDashboard.Styled'
import { TitePages } from '../../components/TitlePred/TitlePredicoes.Styled'
import { GetPredicaoClients } from '../../services/ClientsPredicao'
import { GetResumeClients } from '../../services/ResumeClients'
import { PredicaoClient, ResumoPredicaoClients } from '../../types'
import { ButtonChevron, DivTopHistorico } from '../Predicoes/Historico.Styled'
import { ContainerTableAround } from './Detalhamento.Styled'

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

        <TitePages size={20}>Detalhamento</TitePages>
      </DivTopHistorico>
      <CardPrincipal
        text={resumClient?.nome || ''}
        color="#001C98"
        backgroundCard="#F5F5F5"
      >
        <CardItem
          paddingCard="1px"
          backgroundCardItem="#02156a"
          colorCardItem="#c5cfff"
          text="Média 120 dias"
          value={resumClient?.media120Dias}
          padding="20px"
          fontSize="16px"
        />
        <CardItem
          paddingCard="1px"
          backgroundCardItem="#FFFFFF"
          colorCardItem=" #001C98;"
          text="Últimos 30 dias"
          value={resumClient?.ultimos30Dias}
          tag={resumClient?.percentualUltimos30Dias}
          padding="20px"
          fontSize="16px"
        />
        <CardItem
          paddingCard="1px"
          backgroundCardItem="#FFFFFF"
          colorCardItem=" #001C98;"
          text="Últimos 60 dias"
          value={resumClient?.ultimos60Dias}
          padding="20px"
          fontSize="16px"
        />
        <CardItem
          paddingCard="1px"
          backgroundCardItem="#FFFFFF"
          colorCardItem=" #001C98;"
          text="Últimos 90 dias"
          value={resumClient?.ultimos90Dias}
          padding="20px"
          fontSize="16px"
        />
        <CardItem
          paddingCard="1px"
          backgroundCardItem="#FFFFFF"
          colorCardItem=" #001C98;"
          text="Últimos 120 dias"
          value={resumClient?.ultimos120Dias}
          padding="20px"
          fontSize="16px"
        />
      </CardPrincipal>
      <ContainerTableAround>
        <ViewDataTable
          colorText="#212121"
          widht="515px"
          hasButton={false}
          headers={['ID', 'Cliente', 'Percetual', 'Qtd.']}
          icon={<IconTrendingDown />}
          text="Clientes em baixa"
          color="#FF3333"
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
          colorText="#212121"
          widht="515px"
          hasButton={false}
          headers={['ID', 'Cliente', 'Percetual', 'Qtd.']}
          icon={<IconTrendingUp />}
          text="Clientes em alta"
          color="#00C247"
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
