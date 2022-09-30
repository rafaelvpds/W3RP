import * as React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { IconCheckOne } from '../../assets/icons/IconCheckOne'
import { IconChevronLeft } from '../../assets/icons/IconChevronLeft'
import { IconHistory } from '../../assets/icons/IconHistory'
import { IconProduct } from '../../assets/icons/IconProduct'
import { ViewDataTable } from '../../components/Table/DataTable'
import { STD } from '../../components/Table/TableDashboard.Styled'
import fundo from '../../assets/images/fundoW3.png'
import { TitePages } from '../../components/TitlePred/TitlePredicoes.Styled'
import {
  ButtonChevron,
  ButtonDetalhesCheck,
  ContainerInfoClient,
  ContainerInfoHist,
  DivTopHistorico,
  FundoImage,
} from './Historico.Styled'
import { IconMail } from '../../assets/icons/IconMail'
import { IconPhone } from '../../assets/icons/IconPhone'
import { GetHistoric } from '../../services/ProductHistoric'
import { TypeClients, Historic, SoldOffProduct } from '../../types'
import { GetSoldOffProduct } from '../../services/ProductEsgotado'
import { GetDataClients } from '../../services/ClientesHistoricos'
import { DataClients } from '../../components/DataClients/DataClients'
import { PostProduct } from '../../services/BaixaProduct'
import { dateToBr } from '../../util/ModifyDate'

export function Historico() {
  const { id } = useParams()
  const navigator = useNavigate()
  const [historic, setHistoric] = useState<Historic[]>([])
  const [soldOffProduct, setSoldOffProduct] = useState<SoldOffProduct[]>([])
  const [clientsData, setClients] = useState<TypeClients>()

  const getHistoric = async () => {
    const data = await GetHistoric(id!)
    setHistoric(data)
  }

  useEffect(() => {
    getHistoric()
  }, [])

  const getSoldOffProduct = async () => {
    const data = await GetSoldOffProduct(id!)
    setSoldOffProduct(data)
  }
  useEffect(() => {
    getSoldOffProduct()
  }, [])

  const getDataClients = async () => {
    const data = await GetDataClients(id!)
    setClients(data)
  }
  useEffect(() => {
    getDataClients()
  }, [])

  const darBaixaHistorico = async (produtoId: number) => {
    await PostProduct(id!, produtoId)
    getHistoric()
  }
  const darBaixaProdutoEsgotados = async (produtoId: number) => {
    await PostProduct(id!, produtoId)
    getSoldOffProduct()
  }

  const backPage = () => {
    navigator('/predicao')
  }

  return (
    <>
      <DivTopHistorico>
        <ButtonChevron onClick={backPage}>
          <IconChevronLeft />
        </ButtonChevron>
        <TitePages size={20}>Predição </TitePages>
      </DivTopHistorico>
      <ContainerInfoClient>
        <DataClients
          iconDataEmailClient={<IconMail />}
          iconDataPhoneClient={<IconPhone />}
          nameClients={clientsData?.nome || ''}
          emailClient={clientsData?.email || ''}
          foneClients={clientsData?.telefone || ''}
        />
        <FundoImage src={fundo} />
      </ContainerInfoClient>

      <ContainerInfoHist>
        <ViewDataTable
          colorText="#212121"
          widht="800px"
          hasButton={false}
          headers={['ID', 'Produto', 'Última compra', 'Qtd.', 'Dar baixa']}
          icon={<IconHistory />}
          text="Histórico"
          color="#EEEEEE"
        >
          {historic.map(item => (
            <tr key={item.id}>
              <STD>{item.id}</STD>
              <STD>{item.nome}</STD>
              <STD>{dateToBr(item.ultimaCompra)}</STD>
              <STD>{item.quantidade}</STD>
              <STD>
                <ButtonDetalhesCheck
                  onClick={() => darBaixaHistorico(item.id)}
                  type="button"
                >
                  <IconCheckOne />
                </ButtonDetalhesCheck>
              </STD>
            </tr>
          ))}
        </ViewDataTable>
        <ViewDataTable
          colorText="#FF3333"
          widht="100%"
          hasButton={false}
          headers={[
            'ID',
            'Produto',
            'Última compra',
            'Próx. compra',
            'Qtd.',
            'Dar baixa',
          ]}
          icon={<IconProduct color="#FF3333" />}
          text="Produtos esgotando"
          color="#FFE1E1"
        >
          {soldOffProduct.map(item => (
            <tr key={item.id}>
              <STD>{item.id}</STD>
              <STD>{item.nome}</STD>
              <STD>{dateToBr(item.ultimaCompra)}</STD>
              <STD>{dateToBr(item.proximaCompra)}</STD>
              <STD>{item.quantidade}</STD>
              <STD>
                <ButtonDetalhesCheck
                  type="button"
                  onClick={() => darBaixaProdutoEsgotados(item.id)}
                >
                  <IconCheckOne />
                </ButtonDetalhesCheck>
              </STD>
            </tr>
          ))}
        </ViewDataTable>
      </ContainerInfoHist>
    </>
  )
}
