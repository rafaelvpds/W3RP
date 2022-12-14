import * as React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { IconCheckOne } from '../../assets/icons/IconCheckOne'
import { IconChevronLeft } from '../../assets/icons/IconChevronLeft'
import { IconHistory } from '../../assets/icons/IconHistory'
import { IconProduct } from '../../assets/icons/IconProduct'
import { ViewDataTable } from '../../components/Table/TableDashboard/DataTable'
import { STD } from '../../components/Table/TableDashboard/Style/TableDashboard.Styled'
import fundo from '../../assets/images/fundoW3.png'
import { TitePages } from '../../components/Title/TitlePages/TitlePages.Styled'
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
import { getSoldOffProduct } from '../../services/ProductEsgotado'
import { getDataClients } from '../../services/ClientesHistoricos'
import { DataClients } from '../../components/DataClients/DataClients'
import { PostProduct } from '../../services/BaixaProduct'
import { dateToBr } from '../../util/ModifyDate'
import { Color } from '../../theme/colors'

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

  const getProductSoldOff = async () => {
    const data = await getSoldOffProduct(id!)
    setSoldOffProduct(data)
  }
  useEffect(() => {
    getProductSoldOff()
  }, [])

  const getClientsData = async () => {
    const data = await getDataClients(id!)
    setClients(data)
  }
  useEffect(() => {
    getClientsData()
  }, [])

  const darBaixaHistorico = async (produtoId: number) => {
    const data = await PostProduct(id!, produtoId)
    if (data.logged) {
      getHistoric()
      toast.success('Baixa realizada com Sucesso')
      return
    }
    toast.error(data.message)
  }
  const darBaixaProdutoEsgotados = async (produtoId: number) => {
    await PostProduct(id!, produtoId)
    getProductSoldOff()
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
        <TitePages lineHeight="140%" fontWeight={400} size={20}>
          Predi????o{' '}
        </TitePages>
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
          colorText={`${Color.cinza900}`}
          widht="800px"
          hasButton={false}
          headers={['ID', 'Produto', '??ltima compra', 'Qtd.', 'Dar baixa']}
          icon={<IconHistory />}
          text="Hist??rico"
          color={`${Color.cinza200}`}
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
          colorText={`${Color.erro}`}
          widht="100%"
          hasButton={false}
          headers={[
            'ID',
            'Produto',
            '??ltima compra',
            'Pr??x. compra',
            'Qtd.',
            'Dar baixa',
          ]}
          icon={<IconProduct color={`${Color.erro}`} />}
          text="Produtos esgotando"
          color={`${Color.vermelhoClaro}`}
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
