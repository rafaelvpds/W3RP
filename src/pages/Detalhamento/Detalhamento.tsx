import * as React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IconChevronLeft } from '../../assets/icons/IconChevronLeft'
import { IconTrendingDown } from '../../assets/icons/IconTrendingDown'
import { IconTrendingUp } from '../../assets/icons/IconTrendingUp'
import { CardItem } from '../../components/CardsPrincipal/CardItem'
import { CardPrincipal } from '../../components/CardsPrincipal/CardPrincipal'
import { ViewDataTable } from '../../components/Table/DataTable'
import { STD } from '../../components/Table/TableDashboard.Styled'
import { TitePages } from '../../components/TitlePred/TitlePredicoes.Styled'
import { GetPrediProduto } from '../../services/ProductPredicao'
import { GetResumeProduct } from '../../services/ResumeProduct'
import { Predicao, ResumePredicao } from '../../types'
import { Color } from '../../types/colors'

import { ButtonChevron, DivTopHistorico } from '../Predicoes/Historico.Styled'
import { ContainerTableAround } from './Detalhamento.Styled'

export function Detalhamento() {
  const { id } = useParams()
  const [predicaoAlta, setPredicacaoAlta] = useState<Predicao[]>([])
  const [predicaoBaixa, setPredicacaoBaixa] = useState<Predicao[]>([])
  const navigator = useNavigate()
  const [resumPred, setResumPred] = useState<ResumePredicao>()

  const getPredProdutoAlta = async () => {
    const data = await GetPrediProduto(id!, 'EM_ALTA')
    setPredicacaoAlta(data)
  }
  useEffect(() => {
    getPredProdutoAlta()
  }, [])

  const getPredProdutoBaixa = async () => {
    const data = await GetPrediProduto(id!, 'EM_BAIXA')
    setPredicacaoBaixa(data)
  }
  useEffect(() => {
    getPredProdutoBaixa()
  }, [])

  const getResumPred = async () => {
    const data = await GetResumeProduct(id!)
    setResumPred(data)
  }

  useEffect(() => {
    getResumPred()
  }, [])

  const backPage = () => {
    navigator('/dashboard')
  }
  return (
    <>
      <DivTopHistorico>
        <ButtonChevron onClick={backPage}>
          <IconChevronLeft />
        </ButtonChevron>

        <TitePages size={20}>Detalhamento</TitePages>
      </DivTopHistorico>
      <CardPrincipal
        isFilterData={false}
        text={resumPred?.nome || ''}
        color={`${Color.primary}`}
        backgroundCard={`${Color.cinza100}`}
      >
        <CardItem
          backgroundCardItem="#02156a"
          colorCardItem="#c5cfff"
          colorTextCard={`${Color.branco}`}
          text="Média 120 dias"
          value={resumPred?.media120Dias}
        />
        <CardItem
          backgroundCardItem={`${Color.branco}`}
          colorCardItem={`${Color.primary}`}
          colorTextCard={`${Color.cinza900}`}
          text="Últimos 30 dias"
          value={resumPred?.ultimos30Dias}
          tag={resumPred?.percentualUltimos30Dias}
          colorTag={`${Color.branco}`}
        />
        <CardItem
          backgroundCardItem={`${Color.branco}`}
          colorCardItem={`${Color.primary}`}
          colorTextCard={`${Color.cinza900}`}
          text="Últimos 60 dias"
          value={resumPred?.ultimos60Dias}
        />
        <CardItem
          backgroundCardItem={`${Color.branco}`}
          colorCardItem={`${Color.primary}`}
          colorTextCard={`${Color.cinza900}`}
          text="Últimos 90 dias"
          value={resumPred?.ultimos90Dias}
        />
        <CardItem
          backgroundCardItem={`${Color.branco}`}
          colorCardItem={`${Color.primary}`}
          colorTextCard={`${Color.cinza900}`}
          text="Últimos 120 dias"
          value={resumPred?.ultimos120Dias}
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
