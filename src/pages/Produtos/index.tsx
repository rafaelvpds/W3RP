import { useEffect, useState } from 'react'
import { IconFilter } from '../../assets/icons/IconFilter'
import { IconSearch } from '../../assets/icons/IconSearch'
import { Buttons } from '../../components/buttons/Buttons'
import { InputPredicao } from '../../components/inputsPredicoes/InputPredicao'
import { ModalFilter } from '../../components/ModalFilter'
import { DivButtonModalFilter } from '../../components/ModalFilter/ModalFilter.Styled'
import { Pagination } from '../../components/Pagination/Pagination'
import { TableProduct } from '../../components/TableProduto/TableProduct'
import { StatusProduct } from '../../components/TableProduto/TableProduct.Styled'
import { TitePages } from '../../components/TitlePred/TitlePredicoes.Styled'
import { GetDataProduct } from '../../services/Produto/Product'
import { Product } from '../../types'
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
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>
                {item.classificacao === 'EM_BAIXA' ? (
                  <StatusProduct
                    bacgroundStatus="#FFE1E1"
                    colorStatus="#FF3333"
                  >
                    Em Baixa
                  </StatusProduct>
                ) : (
                  <StatusProduct
                    bacgroundStatus="#D9FEE6"
                    colorStatus="#00C247"
                  >
                    Em Alta
                  </StatusProduct>
                )}
              </td>
              <td>
                {item.percentual > 0 && '+'} {item.percentual}%
              </td>
            </tr>
          ))}
        </TableProduct>
        <Pagination
          currentPage={page}
          totalItens={totalPage}
          updatePage={(pageNumber: number) => setPage(pageNumber)}
        />
      </ContainerProduct>
    </>
  )
}
