import { IconFilter } from '../../assets/icons/IconFilter'
import { IconSearch } from '../../assets/icons/IconSearch'
import { InputPredicao } from '../../components/inputsPredicoes/InputPredicao'
import { TableProduct } from '../../components/TableProduto/TableProduct'
import { StatusProduct } from '../../components/TableProduto/TableProduct.Styled'
import { TitePages } from '../../components/TitlePred/TitlePredicoes.Styled'
import {
  DivContainerInput,
  ButtonDropFilter,
  ContainerProduct,
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
  const filter = () => {
    console.log('dsa')
  }
  const onFilter = () => {
    alert('Deu certo')
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
          <ButtonDropFilter onClick={onFilter} type="button">
            <IconFilter />
          </ButtonDropFilter>
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
