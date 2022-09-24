import { useState } from 'react'
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

import { ContainerTable } from './Dashboard.Styled'

const MokupProduct = [
  {
    id: '001',
    nameProduct: 'Papel higiênico',
    percentege: -72,
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
    nameProduct: 'Café  ',
    percentege: -68,
  },
  {
    id: '007',
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
  {
    id: '007',
    nameClient: 'Academia Smart Fit',
    percentege: -72,
    icon: <IconChevronRight />,
  },
]

export function Dashboard() {
  const [inAltaProduto, setInAltaProduto] = useState(true)
  const [inAltaCliente, setInAltaCliente] = useState(true)
  const navigator = useNavigate()

  const pageDetalhar = (id: string) => {
    navigator(`/detalhamento/${id}`)
  }
  return (
    <>
      <CardPrincipal
        backgroundCard="#001C98"
        widthCard="100%"
        text=" Dashboard"
        color="#ffffff"
      >
        <CardItem
          backgroundCardItem="#02156a"
          heightCardItem="124px"
          widthCardItem="220px"
          colorCardItem="#c5cfff"
          text="Total produtos em alta "
          tag={13}
          value={50}
          valueSerie={60}
          padding="0px"
          fontSize="12px"
        />
        <CardItem
          backgroundCardItem="#02156a"
          heightCardItem="124px"
          widthCardItem="220px"
          colorCardItem="#c5cfff"
          text="Total produtos em baixa"
          tag={-20}
          value={90}
          valueSerie={40}
          padding="0px"
          fontSize="12px"
        />
        <CardItem
          backgroundCardItem="#02156a"
          heightCardItem="124px"
          widthCardItem="220px"
          colorCardItem="#c5cfff"
          text="Total clientes em alta "
          tag={100}
          value={510}
          valueSerie={30}
          padding="0px"
          fontSize="12px"
        />
        <CardItem
          backgroundCardItem="#02156a"
          heightCardItem="124px"
          widthCardItem="220px"
          colorCardItem="#c5cfff"
          text="Total clientes em baixa"
          tag={-50}
          value={600}
          valueSerie={70}
          padding="0px"
          fontSize="12px"
        />
      </CardPrincipal>
      <ContainerTable>
        <ViewDataTable
          colorText="#212121"
          height="520px"
          widht="50%"
          color="#C5CFFF"
          icon={<IconProduct color="#001C98" />}
          text="Produto"
          headers={['id', 'Produto', 'Percentual', '']}
          hasButton
          inAlta={inAltaProduto}
          setInAlta={() => setInAltaProduto(!inAltaProduto)}
        >
          {MokupProduct.map(item => (
            <tr key={item.id}>
              <STD>{item.id}</STD>
              <STD>{item.nameProduct}</STD>
              <STD center>
                {item.percentege > 0 && '+'} {item.percentege}%
              </STD>
              <STD>
                <ButtonDetalhes onClick={() => pageDetalhar('1')} type="button">
                  <IconChevronRight />
                </ButtonDetalhes>
              </STD>
            </tr>
          ))}
        </ViewDataTable>
        <ViewDataTable
          colorText="#212121"
          height="520px"
          widht="50%"
          color="#001C98"
          icon={<IconEveryUser />}
          text="Cliente"
          headers={['id', 'Cliente', 'Percentual', '']}
          hasButton
          inAlta={inAltaCliente}
          setInAlta={() => setInAltaCliente(!inAltaCliente)}
        >
          {MokupClients.map(item => (
            <tr key={item.id}>
              <STD>{item.id}</STD>
              <STD>{item.nameClient}</STD>
              <STD center>
                {item.percentege > 0 && '+'} {item.percentege}%
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
