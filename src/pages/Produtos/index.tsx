import { useState } from 'react'
import { IconFilter } from '../../assets/icons/IconFilter'
import { IconSearch } from '../../assets/icons/IconSearch'
import { Buttons } from '../../components/buttons/Buttons'
import { InputPredicao } from '../../components/inputsPredicoes/InputPredicao'
import { ModalFilter } from '../../components/ModalFilter'
import { DivButtonModalFilter } from '../../components/ModalFilter/ModalFilter.Styled'
import { TableProduct } from '../../components/TableProduto/TableProduct'
import { StatusProduct } from '../../components/TableProduto/TableProduct.Styled'
import { TitePages } from '../../components/TitlePred/TitlePredicoes.Styled'

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

const MokupProduct = [
  {
    id: '001',
    nameProduct: 'Papel higiênico',
    status: 'Em baixa',
    percentege: -72,
  },
  {
    id: '002',
    nameProduct: 'Álcool em gel',
    status: 'Em alta',
    percentege: 68,
  },
  {
    id: '003',
    nameProduct: 'Sabonete',
    status: 'Em baixa',
    percentege: -68,
  },
  {
    id: '004',
    nameProduct: 'Perfume',
    status: 'Em baixa',
    percentege: -72,
  },
  {
    id: '005',
    nameProduct: 'Água sanitária',
    status: 'Em alta',
    percentege: 68,
  },
  {
    id: '006',
    nameProduct: 'Café  ',
    status: 'Em baixa',
    percentege: -68,
  },
  {
    id: '007',
    nameProduct: 'Detergente ',
    status: 'Em baixa',
    percentege: -68,
  },
]

export function Produto() {
  const [showFilter, setShowFilter] = useState(false)
  const [checkTodos, setCheckTodos] = useState(false)
  const [checkAlta, setCheckAlta] = useState(false)
  const [checkBaixa, setCheckBaixa] = useState(false)
  const filter = () => {
    console.log('dsa')
  }

  return (
    <>
      <TitePages size={20}>Produtos</TitePages>
      <ContainerProduct>
        <DivContainerInput>
          <InputPredicao
            onChange={filter}
            placeholder="Pesquise uma palavra-chave"
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
                  setCheck={() => setCheckTodos(!checkTodos)}
                  typeFilter="Todos"
                  totalFilter={1231}
                />
                <ModalFilter
                  isCheck={checkAlta}
                  setCheck={() => setCheckAlta(!checkAlta)}
                  typeFilter="Em alta"
                  totalFilter={1231}
                />
                <ModalFilter
                  isCheck={checkBaixa}
                  setCheck={() => setCheckBaixa(!checkBaixa)}
                  typeFilter="Em baixa"
                  totalFilter={1231}
                />
                <DivButtonModalFilter>
                  <Buttons name="Aplicar" theme="modalFilter" />
                </DivButtonModalFilter>
              </ModalFilterProduct>
            )}
          </WarperModalFilter>
        </DivContainerInput>

        <TableProduct headers={['ID', 'Produto', 'Status', 'Percentual']}>
          {MokupProduct.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nameProduct}</td>
              <td>
                {item.status === 'Em baixa' ? (
                  <StatusProduct
                    bacgroundStatus="#FFE1E1"
                    colorStatus="#FF3333"
                  >
                    {item.status}
                  </StatusProduct>
                ) : (
                  <StatusProduct
                    bacgroundStatus="#D9FEE6"
                    colorStatus="#00C247"
                  >
                    {item.status}
                  </StatusProduct>
                )}
              </td>
              <td>
                {item.percentege > 0 && '+'} {item.percentege}%
              </td>
            </tr>
          ))}
        </TableProduct>
      </ContainerProduct>
    </>
  )
}
