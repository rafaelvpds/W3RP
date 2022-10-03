import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IconFilter } from '../../assets/icons/IconFilter'
import { IconSearch } from '../../assets/icons/IconSearch'
import { Buttons } from '../../components/buttons/Buttons'
import { InputPredicao } from '../../components/inputsPredicoes/InputPredicao'
import { ModalFilter } from '../../components/ModalFilter'
import { DivButtonModalFilter } from '../../components/ModalFilter/ModalFilter.Styled'
import { Pagination } from '../../components/Pagination/Pagination'
import { TableProduct } from '../../components/TableProduto/TableProduct'
import {
  StatusProduct,
  STDProduct,
} from '../../components/TableProduto/TableProduct.Styled'
import { TitePages } from '../../components/TitlePred/TitlePredicoes.Styled'
import { GetDataProduct } from '../../services/Produto/Product'
import { Product } from '../../types'
import { Color } from '../../types/colors'
import {
  DivContainerInput,
  ButtonDropFilter,
  ContainerProduct,
  DivButtonFilter,
  ModalFilterProduct,
  WarperModalFilter,
  SpanTitleFilter,
  LineModal,
  SpanSubtitleFilter,
} from './Product.Styled'

export function Produto() {
  const navigator = useNavigate()
  const [showFilter, setShowFilter] = useState(false)
  const [checkTodos, setCheckTodos] = useState(true)
  const [checkAlta, setCheckAlta] = useState(false)
  const [checkBaixa, setCheckBaixa] = useState(false)
  const [page, setPage] = useState(0)
  const [totalPage, setTotalPage] = useState(0)
  const [product, setProduct] = useState<Product[]>([])
  const [search, setSearch] = useState('')

  const GetProduct = async () => {
    let classificacao: 'EM_ALTA' | 'EM_BAIXA' | undefined

    if (!checkTodos) {
      classificacao = checkAlta ? 'EM_ALTA' : 'EM_BAIXA'
    }
    const dataProduct = await GetDataProduct(search, page, classificacao)
    setTotalPage(dataProduct.totalItens)
    setProduct(dataProduct.data)
  }

  useEffect(() => {
    GetProduct()
  }, [page])
  const pageDetalharProduct = (id: number) => {
    navigator(`/detalhamento/${id}`)
  }
  return (
    <>
      <TitePages size={20}>Produtos</TitePages>
      <ContainerProduct>
        <DivContainerInput>
          <InputPredicao
            value={search}
            onChange={event => setSearch(event.target.value)}
            placeholder="Pesquise uma palavra-chave"
            filterButton={GetProduct}
            icon={<IconSearch />}
          />
          <DivButtonFilter>
            <ButtonDropFilter
              onClick={() => setShowFilter(!showFilter)}
              type="button"
            >
              <IconFilter />
            </ButtonDropFilter>
          </DivButtonFilter>
          <WarperModalFilter>
            {showFilter && (
              <ModalFilterProduct>
                <SpanTitleFilter>Filtrar por:</SpanTitleFilter>
                <LineModal />
                <SpanSubtitleFilter>Status</SpanSubtitleFilter>

                <ModalFilter
                  isCheck={checkTodos}
                  setCheck={() => {
                    setCheckTodos(true)
                    setCheckAlta(false)
                    setCheckBaixa(false)
                  }}
                  typeFilter="Todos"
                  totalFilter={1231}
                />
                <ModalFilter
                  isCheck={checkAlta}
                  setCheck={() => {
                    setCheckTodos(false)
                    setCheckAlta(true)
                    setCheckBaixa(false)
                  }}
                  typeFilter="Em alta"
                  totalFilter={1231}
                />
                <ModalFilter
                  isCheck={checkBaixa}
                  setCheck={() => {
                    setCheckTodos(false)
                    setCheckAlta(false)
                    setCheckBaixa(true)
                  }}
                  typeFilter="Em baixa"
                  totalFilter={1231}
                />
                <DivButtonModalFilter>
                  <Buttons
                    onClick={() => {
                      GetProduct()
                      setShowFilter(false)
                    }}
                    name="Aplicar"
                    theme="modalFilter"
                  />
                </DivButtonModalFilter>
              </ModalFilterProduct>
            )}
          </WarperModalFilter>
        </DivContainerInput>

        <TableProduct headers={['ID', 'Produto', 'Status', 'Percentual']}>
          {product.map(item => (
            <tr key={item.id} onClick={() => pageDetalharProduct(item.id)}>
              <STDProduct center>{item.id}</STDProduct>
              <STDProduct>{item.nome}</STDProduct>
              <STDProduct center>
                {item.classificacao === 'EM_BAIXA' ? (
                  <StatusProduct
                    bacgroundStatus={`${Color.vermelhoClaro}`}
                    colorStatus={`${Color.erro}`}
                  >
                    Em Baixa
                  </StatusProduct>
                ) : (
                  <StatusProduct
                    bacgroundStatus={`${Color.verdeClaro}`}
                    colorStatus={`${Color.sucesso}`}
                  >
                    Em Alta
                  </StatusProduct>
                )}
              </STDProduct>
              <td>
                {item.percentual > 0 && '+'} {item.percentual}%
              </td>
            </tr>
          ))}
        </TableProduct>
        <Pagination
          currentPage={page}
          size={7}
          totalItens={totalPage}
          updatePage={(pageNumber: number) => setPage(pageNumber)}
        />
      </ContainerProduct>
    </>
  )
}
