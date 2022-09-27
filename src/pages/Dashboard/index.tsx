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
import { GetProductClient } from '../../services/ProductDashboard'
import { GetResumeDashboard } from '../../services/ResumeDashboard'
import { DataDashboard, ResumeDashboard } from '../../types'

import { ContainerTable } from './Dashboard.Styled'

export function Dashboard() {
  const [inAltaProduto, setInAltaProduto] = useState(true)
  const [inAltaCliente, setInAltaCliente] = useState(true)
  const [clients, setClients] = useState<DataDashboard[]>([])
  const [product, setProduct] = useState<DataDashboard[]>([])
  const [resume, setResume] = useState<ResumeDashboard>()
  const navigator = useNavigate()

  const getClients = async () => {
    const dataClients = await GetListClient(
      inAltaCliente ? 'EM_ALTA' : 'EM_BAIXA'
    )
    setClients(dataClients)
  }

  useEffect(() => {
    getClients()
  }, [inAltaCliente])

  const getProduct = async () => {
    const dataProduct = await GetProductClient(
      inAltaProduto ? 'EM_ALTA' : 'EM_BAIXA'
    )
    setProduct(dataProduct)
  }
  useEffect(() => {
    getProduct()
  }, [inAltaProduto])
  const getResumo = async () => {
    const dataResume = await GetResumeDashboard()
    setResume(dataResume)
  }

  useEffect(() => {
    getResumo()
  }, [])
  const pageDetalhar = (id: number) => {
    navigator(`/detalhamento/${id}`)
  }
  return (
    <>
      <CardPrincipal backgroundCard="#001C98" text=" Dashboard" color="#ffffff">
        <CardItem
          backgroundCardItem="#02156a"
          heightCardItem="124px"
          widthCardItem="220px"
          colorCardItem="#c5cfff"
          text="Total produtos em alta "
          tag={resume?.percentualVariacaoProdutosAlta}
          value={resume?.quantidadeProdutosAlta}
          valueSerie={resume?.percentualTotalProdutosAlta}
          padding="0px"
          fontSize="12px"
        />
        <CardItem
          backgroundCardItem="#02156a"
          heightCardItem="124px"
          widthCardItem="220px"
          colorCardItem="#c5cfff"
          text="Total produtos em baixa"
          tag={resume?.percentualVariacaoProdutosBaixa}
          value={resume?.quantidadeProdutosBaixa}
          valueSerie={resume?.percentualTotalProdutosBaixa}
          padding="0px"
          fontSize="12px"
        />
        <CardItem
          backgroundCardItem="#02156a"
          heightCardItem="124px"
          widthCardItem="220px"
          colorCardItem="#c5cfff"
          text="Total clientes em alta "
          tag={resume?.percentualVariacaoClientesAlta}
          value={resume?.quantidadeClientesAlta}
          valueSerie={resume?.percentualTotalClientesAlta}
          padding="0px"
          fontSize="12px"
        />
        <CardItem
          backgroundCardItem="#02156a"
          heightCardItem="124px"
          widthCardItem="220px"
          colorCardItem="#c5cfff"
          text="Total clientes em baixa"
          tag={resume?.percentualVariacaoClientesBaixa}
          value={resume?.quantidadeClientesBaixa}
          valueSerie={resume?.percentualTotalClientesBaixa}
          padding="0px"
          fontSize="12px"
        />
      </CardPrincipal>
      <ContainerTable>
        <ViewDataTable
          colorText="#212121"
          widht="50%"
          color="#C5CFFF"
          icon={<IconProduct color="#001C98" />}
          text="Produto"
          headers={['id', 'Produto', 'Percentual', '']}
          hasButton
          inAlta={inAltaProduto}
          setInAlta={() => setInAltaProduto(!inAltaProduto)}
        >
          {product.map(item => (
            <tr key={item.id}>
              <STD>{item.id}</STD>
              <STD>{item.nome}</STD>
              <STD center>
                {item.percentual > 0 && '+'} {item.percentual}%
              </STD>
              <STD>
                <ButtonDetalhes
                  onClick={() => pageDetalhar(item.id)}
                  type="button"
                >
                  <IconChevronRight />
                </ButtonDetalhes>
              </STD>
            </tr>
          ))}
        </ViewDataTable>
        <ViewDataTable
          colorText="#212121"
          widht="50%"
          color="#001C98"
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
                <ButtonDetalhes type="button">
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
