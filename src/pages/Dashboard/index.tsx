import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconChevronRight } from '../../assets/icons/IconChevronRight'
import { IconEveryUser } from '../../assets/icons/IconEveryUser'
import { IconProduct } from '../../assets/icons/IconProduct'

import { CardPrincipal } from '../../components/CardsPrincipal/CardPrincipal'
import { ViewDataTable } from '../../components/Table/DataTable'
import {
  ButtonDetalhes,
  STD,
} from '../../components/Table/Style/TableDashboard.Styled'
import { getListClient } from '../../services/ClientsDashboard'
import { getProductApi } from '../../services/ProductDashboard'
import { getResumeDashboard } from '../../services/ResumeDashboard'
import { ResumeDashboard, DataDashboard } from '../../types'
import { Color } from '../../theme/colors'

import { dateHelper } from '../../util'
import { ContainerTable } from './Dashboard.Styled'
import { CardItem } from '../../components/CardItem/CardItem'

export function Dashboard() {
  const [inHighProduct, setInHighProduct] = useState(true)
  const [inHighClient, setInHighClient] = useState(true)
  const [clients, setClients] = useState<DataDashboard[]>([])
  const [product, setProduct] = useState<DataDashboard[]>([])
  const [resume, setResume] = useState<ResumeDashboard>()
  const [date, setDate] = useState(dateHelper.thisMonth())
  const navigator = useNavigate()

  const getClients = async () => {
    const data = await getListClient(
      inHighClient ? 'EM_ALTA' : 'EM_BAIXA',
      date.end,
      date.start
    )
    setClients(data)
  }

  useEffect(() => {
    getClients()
  }, [inHighClient, date])

  const getProduct = async () => {
    const data = await getProductApi(
      inHighProduct ? 'EM_ALTA' : 'EM_BAIXA',
      date.end,
      date.start
    )
    setProduct(data)
  }
  useEffect(() => {
    getProduct()
  }, [inHighProduct, date])

  const getResumo = async () => {
    const data = await getResumeDashboard(date.end, date.start)
    setResume(data)
  }

  useEffect(() => {
    getResumo()
  }, [date])

  const pageDetalharProduct = (id: number) => {
    navigator(`/detalhamento/${id}`)
  }
  const pageDetalharClients = (id: number) => {
    navigator(`/detalhamentocliente/${id}`)
  }
  return (
    <>
      <CardPrincipal
        fontWeight="600"
        lineHeight="150%"
        setDate={setDate}
        backgroundCard={`${Color.primary}`}
        text=" Dashboard"
        color={`${Color.branco}`}
        isFilterData
      >
        <CardItem
          backgroundCardItem={`${Color.azul1}`}
          colorCardItem={`${Color.branco}`}
          colorTextCard={`${Color.azul4}`}
          text="Total produtos em alta "
          tag={resume?.percentualVariacaoProdutosAlta}
          value={resume?.quantidadeProdutosAlta}
          valueSerie={resume?.percentualTotalProdutosAlta}
          colorTag={`${Color.branco}`}
        />
        <CardItem
          backgroundCardItem={`${Color.azul1}`}
          colorCardItem={`${Color.branco}`}
          colorTextCard={`${Color.azul4}`}
          text="Total produtos em baixa"
          tag={resume?.percentualVariacaoProdutosBaixa}
          value={resume?.quantidadeProdutosBaixa}
          valueSerie={resume?.percentualTotalProdutosBaixa}
          colorTag={`${Color.branco}`}
        />
        <CardItem
          backgroundCardItem={`${Color.azul1}`}
          colorCardItem={`${Color.branco}`}
          colorTextCard={`${Color.azul4}`}
          text="Total clientes em alta "
          tag={resume?.percentualVariacaoClientesAlta}
          value={resume?.quantidadeClientesAlta}
          valueSerie={resume?.percentualTotalClientesAlta}
          colorTag={`${Color.branco}`}
        />
        <CardItem
          backgroundCardItem={`${Color.azul1}`}
          colorCardItem={`${Color.branco}`}
          colorTextCard={`${Color.azul4}`}
          text="Total clientes em baixa"
          tag={resume?.percentualVariacaoClientesBaixa}
          value={resume?.quantidadeClientesBaixa}
          valueSerie={resume?.percentualTotalClientesBaixa}
          colorTag={`${Color.branco}`}
        />
      </CardPrincipal>
      <ContainerTable>
        <ViewDataTable
          colorText={`${Color.cinza900}`}
          widht="50%"
          color={`${Color.azul4}`}
          icon={<IconProduct color={`${Color.primary}`} />}
          text="Produto"
          headers={['id', 'Produto', 'Percentual', '']}
          hasButton
          onHigh={inHighProduct}
          setOnHigh={() => setInHighProduct(!inHighProduct)}
        >
          {product.map(item => (
            <tr onClick={() => pageDetalharProduct(item.id)} key={item.id}>
              <STD center>{item.id}</STD>
              <STD>{item.nome}</STD>
              <STD center>
                {item.percentual > 0 && '+'} {item.percentual}%
              </STD>
              <STD>
                <ButtonDetalhes
                  onClick={() => pageDetalharProduct(item.id)}
                  type="button"
                >
                  <IconChevronRight />
                </ButtonDetalhes>
              </STD>
            </tr>
          ))}
        </ViewDataTable>
        <ViewDataTable
          colorText={`${Color.cinza900}`}
          widht="50%"
          color={`${Color.primary}`}
          icon={<IconEveryUser />}
          text="Cliente"
          headers={['id', 'Cliente', 'Percentual', '']}
          hasButton
          onHigh={inHighClient}
          setOnHigh={() => setInHighClient(!inHighClient)}
        >
          {clients.map(item => (
            <tr key={item.id}>
              <STD center>{item.id}</STD>
              <STD>{item.nome}</STD>
              <STD center>
                {item.percentual > 0 && '+'} {item.percentual}%
              </STD>
              <STD>
                <ButtonDetalhes
                  onClick={() => pageDetalharClients(item.id)}
                  type="button"
                >
                  <IconChevronRight />
                </ButtonDetalhes>
              </STD>
            </tr>
          ))}
        </ViewDataTable>
      </ContainerTable>
    </>
  )
}
