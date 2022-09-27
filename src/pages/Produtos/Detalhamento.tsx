// @flow
import * as React from 'react'
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
import { GetPrediProduto } from '../../services/ProductPredicao'
import { GetResumeProduct } from '../../services/ResumeProduct'
import { Predicao, ResumePredicao } from '../../types'

import { DivChevron, DivTopHistorico } from '../Predicoes/Historico.Styled'
import { ContainerTableAround } from './Detalhamento.Styled'

export function Detalhamento() {
  const { id } = useParams()
  const [predicaoAlta, setPredicacaoAlta] = useState<Predicao[]>([])
  const [predicaoBaixa, setPredicacaoBaixa] = useState<Predicao[]>([])
  const [resumPred, setResumPred] = useState<ResumePredicao>()
  // const [inAlta, setInAlta] = useState(true)

  const getPredProdutoAlta = async () => {
    const dataPrediAlta = await GetPrediProduto(id!, 'EM_ALTA')
    setPredicacaoAlta(dataPrediAlta)
  }
  useEffect(() => {
    getPredProdutoAlta()
  }, [])

  const getPredProdutoBaixa = async () => {
    const dataPrediBaixa = await GetPrediProduto(id!, 'EM_BAIXA')
    setPredicacaoBaixa(dataPrediBaixa)
  }
  useEffect(() => {
    getPredProdutoBaixa()
  }, [])

  const getResumPred = async () => {
    const dataResumPred = await GetResumeProduct(id!)
    setResumPred(dataResumPred)
  }

  useEffect(() => {
    getResumPred()
  }, [])
  return (
    <>
      <DivTopHistorico>
        <DivChevron>
          <IconChevronLeft />
        </DivChevron>

        <TitePages size={20}>Detalhamento</TitePages>
      </DivTopHistorico>
      <CardPrincipal
        text={resumPred?.nome || ''}
        color="#001C98"
        backgroundCard="#F5F5F5"
      >
        <CardItem
          backgroundCardItem="#02156a"
          heightCardItem="124px"
          widthCardItem="220px"
          colorCardItem="#c5cfff"
          text="Média 120 dias"
          value={resumPred?.media120Dias}
          padding="20px"
          fontSize="16px"
        />
        <CardItem
          backgroundCardItem="#FFFFFF"
          heightCardItem="124px"
          widthCardItem="220px"
          colorCardItem=" #001C98;"
          text="Últimos 30 dias"
          value={resumPred?.ultimos30Dias}
          tag={resumPred?.percentualUltimos30Dias}
          padding="20px"
          fontSize="16px"
        />
        <CardItem
          backgroundCardItem="#FFFFFF"
          heightCardItem="124px"
          widthCardItem="220px"
          colorCardItem=" #001C98;"
          text="Últimos 60 dias"
          value={resumPred?.ultimos60Dias}
          padding="20px"
          fontSize="16px"
        />
        <CardItem
          backgroundCardItem="#FFFFFF"
          heightCardItem="124px"
          widthCardItem="220px"
          colorCardItem=" #001C98;"
          text="Últimos 90 dias"
          value={resumPred?.ultimos90Dias}
          padding="20px"
          fontSize="16px"
        />
        <CardItem
          backgroundCardItem="#FFFFFF"
          heightCardItem="124px"
          widthCardItem="220px"
          colorCardItem=" #001C98;"
          text="Últimos 120 dias"
          value={resumPred?.media120Dias}
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
