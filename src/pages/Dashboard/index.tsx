import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconChevronRight } from '../../assets/icons/IconChevronRight'
import { IconEveryUser } from '../../assets/icons/IconEveryUser'
import { IconProduct } from '../../assets/icons/IconProduct'
import { CardItem } from '../../components/CardsPrincipal/CardItem'
import { CardPrincipal } from '../../components/CardsPrincipal/CardPrincipal'
import { ViewDataTable } from '../../components/Table/DataTable'
import {
  ButtonDetalhes,
  STD,
} from '../../components/Table/TableDashboard.Styled'
import { GetListClient } from '../../services/ClientsDashboard'
import { getProductApi } from '../../services/ProductDashboard'
import { GetResumeDashboard } from '../../services/ResumeDashboard'
import { ResumeDashboard, DataDashboard } from '../../types'
import { Color } from '../../types/colors'

import { dateHelper } from '../../util'
import { ContainerTable } from './Dashboard.Styled'

export function Dashboard() {
  const [inAltaProduto, setInAltaProduto] = useState(true)
  const [inAltaCliente, setInAltaCliente] = useState(true)
  const [clients, setClients] = useState<DataDashboard[]>([])
  const [product, setProduct] = useState<DataDashboard[]>([])
  const [resume, setResume] = useState<ResumeDashboard>()
  const [date, setDate] = useState(dateHelper.thisMonth())
  const navigator = useNavigate()

  const getClients = async () => {
    const data = await GetListClient(
      inAltaCliente ? 'EM_ALTA' : 'EM_BAIXA',
      date.end,
      date.start
    )
    setClients(data)
  }

  useEffect(() => {
    getClients()
  }, [inAltaCliente, date])

  const getProduct = async () => {
    const data = await getProductApi(
      inAltaProduto ? 'EM_ALTA' : 'EM_BAIXA',
      date.end,
      date.start
    )
    setProduct(data)
  }
  useEffect(() => {
    getProduct()
  }, [inAltaProduto, date])

  const getResumo = async () => {
    const data = await GetResumeDashboard(date.end, date.start)
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
        setDate={setDate}
        backgroundCard={`${Color.primary}`}
        text=" Dashboard"
        color={`${Color.branco}`}
        isFilterData
      >
        <CardItem
          backgroundCardItem="#02156a"
          colorCardItem={`${Color.branco}`}
          colorTextCard="#C5CFFF"
          text="Total produtos em alta "
          tag={resume?.percentualVariacaoProdutosAlta}
          value={resume?.quantidadeProdutosAlta}
          valueSerie={resume?.percentualTotalProdutosAlta}
          colorTag={`${Color.branco}`}
        />
        <CardItem
          backgroundCardItem="#02156a"
          colorCardItem={`${Color.branco}`}
          colorTextCard="#C5CFFF"
          text="Total produtos em baixa"
          tag={resume?.percentualVariacaoProdutosBaixa}
          value={resume?.quantidadeProdutosBaixa}
          valueSerie={resume?.percentualTotalProdutosBaixa}
          colorTag={`${Color.branco}`}
        />
        <CardItem
          backgroundCardItem="#02156a"
          colorCardItem={`${Color.branco}`}
          colorTextCard="#C5CFFF"
          text="Total clientes em alta "
          tag={resume?.percentualVariacaoClientesAlta}
          value={resume?.quantidadeClientesAlta}
          valueSerie={resume?.percentualTotalClientesAlta}
          colorTag={`${Color.branco}`}
        />
        <CardItem
          backgroundCardItem="#02156a"
          colorCardItem={`${Color.branco}`}
          colorTextCard="#C5CFFF"
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
          color="#C5CFFF"
          icon={<IconProduct color={`${Color.primary}`} />}
          text="Produto"
          headers={['id', 'Produto', 'Percentual', '']}
          hasButton
          inAlta={inAltaProduto}
          setInAlta={() => setInAltaProduto(!inAltaProduto)}
        >
          {product.map(item => (
            <tr onClick={() => pageDetalharProduct(item.id)} key={item.id}>
              <STD>{item.id}</STD>
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
          inAlta={inAltaCliente}
          setInAlta={() => setInAltaCliente(!inAltaCliente)}
        >
          {clients.map(item => (
            <tr key={item.id}>
              <STD>{item.id}</STD>
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
