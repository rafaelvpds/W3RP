import { IconChevronRight } from '../../assets/icons/IconChevronRight'
import { IconEveryUser } from '../../assets/icons/IconEveryUser'
import { IconProduct } from '../../assets/icons/IconProduct'
import { CardItem } from '../../components/cards/CardItem'
import { CardPrincipal } from '../../components/cards/CardPrincipal'
import { ViewDataTable } from '../../components/Table/DataTable'

import { ContainerTable } from './Dashboard.Styled'

const MokupProduct = [
  {
    id: '001',
    nameProduct: 'Papel higiênico',
    percentege: '-72%',
    icon: <IconChevronRight />,
  },
  {
    id: '002',
    nameProduct: 'Álcool em gel',
    percentege: 68,
  },
  {
    id: '003',
    nameProduct: 'Sabonete',
    percentege: -68,
  },
  {
    id: '004',
    nameProduct: 'Perfume',
    percentege: -72,
  },
  {
    id: '005',
    nameProduct: 'Água sanitária',
    percentege: 68,
  },
  {
    id: '006',
    nameProduct: 'Detergente ',
    percentege: -68,
  },
]
const MokupClients = [
  {
    id: '001',
    nameClient: 'Hótel Ibis',
    percentege: -72,
    icon: <IconChevronRight />,
  },
  {
    id: '002',
    nameClient: 'Restaurante Carretão',
    percentege: -72,
    icon: <IconChevronRight />,
  },
  {
    id: '003',
    nameClient: 'Nobile Hotel',
    percentege: -72,
    icon: <IconChevronRight />,
  },
  {
    id: '004',
    nameClient: 'Mc Donald’s',
    percentege: -72,
    icon: <IconChevronRight />,
  },
  {
    id: '005',
    nameClient: 'Hótel Ibis',
    percentege: -72,
    icon: <IconChevronRight />,
  },
  {
    id: '006',
    nameClient: 'Academia Smart Fit',
    percentege: -72,
    icon: <IconChevronRight />,
  },
]

export function Dashboard() {
  return (
    <>
      <CardPrincipal>
        <CardItem
          text="Produto"
          status="alta"
          tag={20}
          value={50}
          valueSerie={60}
        />
        <CardItem
          text="Produto"
          status="baixa"
          tag={-20}
          value={90}
          valueSerie={40}
        />
        <CardItem
          text="Cliente"
          status="alta"
          tag={100}
          value={510}
          valueSerie={30}
        />
        <CardItem
          text="Cliente"
          status="baixa"
          tag={-50}
          value={600}
          valueSerie={70}
        />
      </CardPrincipal>
      <ContainerTable>
        <ViewDataTable
          isClient={false}
          icon={<IconProduct />}
          text="Produto"
          headers={['id', 'Produto', 'Percentual', '']}
        >
          {MokupProduct.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nameProduct}</td>
              <td>
                {item.percentege > 0 && '+'} {item.percentege}%
              </td>
              <td>
                <IconChevronRight />
              </td>
            </tr>
          ))}
        </ViewDataTable>
        <ViewDataTable
          isClient
          icon={<IconEveryUser />}
          text="Cliente"
          headers={['id', 'Cliente', 'Percentual', '']}
        >
          {MokupClients.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nameClient}</td>
              {item.percentege > 0 && '+'} {item.percentege}%
              <td>
                <IconChevronRight />
              </td>
            </tr>
          ))}
        </ViewDataTable>
      </ContainerTable>
    </>
  )
}
