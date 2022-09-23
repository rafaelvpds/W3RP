// @flow
import * as React from 'react'
import { IconChevronLeft } from '../../assets/icons/IconChevronLeft'
import { IconTrendingDown } from '../../assets/icons/IconTrendingDown'
import { IconTrendingUp } from '../../assets/icons/IconTrendingUp'
import { CardItem } from '../../components/cardsPrincipal/CardItem'
import { CardPrincipal } from '../../components/cardsPrincipal/CardPrincipal'
import { ViewDataTable } from '../../components/Table/DataTable'
import { STD } from '../../components/Table/TableDashboard.Styled'
import { TitePages } from '../../components/TitlePred/TitlePredicoes.Styled'
import { DivChevron, DivTopHistorico } from '../Predicoes/Historico.Styled'
import { ContainerTableAround } from './Detalhamento.Styled'

const MokupDetalhe = [
  {
    id: '001',
    nameClient: 'Hótel Ibis',
    percentege: -72,
    Qtd: 25,
  },
  {
    id: '002',
    nameClient: 'Restaurante Carretão',
    percentege: -72,
    Qtd: 20,
  },
  {
    id: '003',
    nameClient: 'Nobile Hotel',
    percentege: -72,
    Qtd: 10,
  },
  {
    id: '004',
    nameClient: 'Mc Donald’s',
    percentege: -72,
    Qtd: 5,
  },
  {
    id: '005',
    nameClient: 'Hótel Ibis',
    percentege: -72,
    Qtd: 16,
  },
]

export function Detalhamento() {
  return (
    <>
      <DivTopHistorico>
        <DivChevron>
          <IconChevronLeft />
        </DivChevron>

        <TitePages size={20}>Detalhamento</TitePages>
      </DivTopHistorico>
      <CardPrincipal
        text="Papel higiênico"
        color="#001C98"
        backgroundCard="#F5F5F5"
        widthCard="100%"
      >
        <CardItem
          backgroundCardItem="#02156a"
          heightCardItem="124px"
          widthCardItem="220px"
          colorCardItem="#c5cfff"
          text="Média 120 dias"
          value={300}
          padding="20px"
          fontSize="16px"
        />
        <CardItem
          backgroundCardItem="#FFFFFF"
          heightCardItem="124px"
          widthCardItem="220px"
          colorCardItem=" #001C98;"
          text="Últimos 30 dias"
          value={300}
          padding="20px"
          fontSize="16px"
        />
        <CardItem
          backgroundCardItem="#FFFFFF"
          heightCardItem="124px"
          widthCardItem="220px"
          colorCardItem=" #001C98;"
          text="Últimos 60 dias"
          value={300}
          padding="20px"
          fontSize="16px"
        />
        <CardItem
          backgroundCardItem="#FFFFFF"
          heightCardItem="124px"
          widthCardItem="220px"
          colorCardItem=" #001C98;"
          text="Últimos 90 dias"
          value={300}
          padding="20px"
          fontSize="16px"
        />
        <CardItem
          backgroundCardItem="#FFFFFF"
          heightCardItem="124px"
          widthCardItem="220px"
          colorCardItem=" #001C98;"
          text="Últimos 120 dias"
          value={300}
          padding="20px"
          fontSize="16px"
        />
      </CardPrincipal>
      <ContainerTableAround>
        <ViewDataTable
          colorText="#212121"
          height="380px"
          widht="515px"
          hasButton={false}
          headers={['ID', 'Cliente', 'Percetual', 'Qtd.']}
          icon={<IconTrendingDown />}
          text="Clientes em baixa"
          color="#FF3333"
        >
          {MokupDetalhe.map(item => (
            <tr key={item.id}>
              <STD>{item.id}</STD>
              <STD>{item.nameClient}</STD>
              <STD center>
                {item.percentege > 0 && '+'} {item.percentege}%
              </STD>
              <STD>{item.Qtd}</STD>
            </tr>
          ))}
        </ViewDataTable>
        <ViewDataTable
          colorText="#212121"
          height="380px"
          widht="515px"
          hasButton={false}
          headers={['ID', 'Cliente', 'Percetual', 'Qtd.']}
          icon={<IconTrendingUp />}
          text="Clientes em alta"
          color="#00C247"
        >
          {MokupDetalhe.map(item => (
            <tr key={item.id}>
              <STD>{item.id}</STD>
              <STD>{item.nameClient}</STD>
              <STD center>
                {item.percentege > 0 && '+'} {item.percentege}%
              </STD>
              <STD>{item.Qtd}</STD>
            </tr>
          ))}
        </ViewDataTable>
      </ContainerTableAround>
    </>
  )
}
