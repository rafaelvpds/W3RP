// @flow
import * as React from 'react'
import { IconCheckOne } from '../../assets/icons/IconCheckOne'
import { IconChevronLeft } from '../../assets/icons/IconChevronLeft'
import { IconHistory } from '../../assets/icons/IconHistory'
import { IconProduct } from '../../assets/icons/IconProduct'
import { DataClients } from '../../components/DataClients/DataClients'
import { ViewDataTable } from '../../components/Table/DataTable'
import { STD } from '../../components/Table/TableDashboard.Styled'

import { TitePages } from '../../components/TitlePred/TitlePredicoes.Styled'
import {
  ButtonDetalhesCheck,
  ContainerInfoClient,
  ContainerInfoHist,
  DivChevron,
  DivTopHistorico,
} from './Historico.Styled'

const MokupPredicao = [
  {
    id: '001',
    nameProduct: 'Papel higiênico',
    ultimaCom: '23/08',
    qtd: '03',
  },
  {
    id: '002',
    nameProduct: 'Álcool em gel',
    ultimaCom: '23/08',
    qtd: '03',
  },
  {
    id: '003',
    nameProduct: 'Sabonete',
    ultimaCom: '23/08',
    qtd: '03',
  },
  {
    id: '004',
    nameProduct: 'Detergente',
    ultimaCom: '23/08',
    qtd: '03',
  },
  {
    id: '005',
    nameProduct: 'Água sanitária',
    ultimaCom: '23/08',
    qtd: '03',
  },
  {
    id: '005',
    nameProduct: 'Papel higiênico',
    ultimaCom: '23/08',
    qtd: '03',
  },
  {
    id: '007',
    nameProduct: 'Sabonete',
    ultimaCom: '23/08',
    qtd: '03',
  },
  {
    id: '008',
    nameProduct: 'Detergente',
    ultimaCom: '23/08',
    qtd: '03',
  },
  {
    id: '008',
    nameProduct: 'Água sanitária',
    ultimaCom: '23/08',
    qtd: '03',
  },
]
const MokupPredicaoEsgotado = [
  {
    id: '001',
    nameProduct: 'Papel higiênico',
    ultimaCom: '23/08',
    ProxCompra: '23/09',
    qtd: '03',
  },
  {
    id: '002',
    nameProduct: 'Álcool em gel',
    ultimaCom: '23/08',
    ProxCompra: '23/09',
    qtd: '03',
  },
  {
    id: '003',
    nameProduct: 'Sabonete',
    ultimaCom: '23/08',
    ProxCompra: '23/09',
    qtd: '03',
  },
  {
    id: '004',
    nameProduct: 'Detergente',
    ultimaCom: '23/08',
    ProxCompra: '23/09',
    qtd: '03',
  },
  {
    id: '005',
    nameProduct: 'Água sanitária',
    ultimaCom: '23/08',
    ProxCompra: '23/09',
    qtd: '03',
  },
  {
    id: '005',
    nameProduct: 'Papel higiênico',
    ultimaCom: '23/08',
    ProxCompra: '23/09',
    qtd: '03',
  },
]
export function Historico() {
  return (
    <>
      <DivTopHistorico>
        <DivChevron>
          <IconChevronLeft />
        </DivChevron>

        <TitePages size={20}>Predição </TitePages>
      </DivTopHistorico>
      <ContainerInfoClient>
        <DataClients
          nameClients="Hotel Ibis"
          emailClient="hotelibis@gmail.com"
          foneClients="31 99468-9894"
        />
      </ContainerInfoClient>

      <ContainerInfoHist>
        <ViewDataTable
          colorText="#212121"
          height="100%"
          widht="800px"
          hasButton={false}
          headers={['ID', 'Produto', 'Última compra', 'Qtd.', 'Dar baixa']}
          icon={<IconHistory />}
          text="Histórico"
          color="#EEEEEE"
        >
          {MokupPredicao.map(item => (
            <tr key={item.id}>
              <STD>{item.id}</STD>
              <STD>{item.nameProduct}</STD>
              <STD>{item.ultimaCom}</STD>
              <STD>{item.qtd}</STD>
              <STD>
                <ButtonDetalhesCheck type="button">
                  <IconCheckOne />
                </ButtonDetalhesCheck>
              </STD>
            </tr>
          ))}
        </ViewDataTable>
        <ViewDataTable
          colorText="#FF3333"
          height="100%"
          widht="100%"
          hasButton={false}
          headers={[
            'ID',
            'Produto',
            'Última compra',
            'Próx. compra',
            'Qtd.',
            'Dar baixa',
          ]}
          icon={<IconProduct color="#FF3333" />}
          text="Produtos esgotando"
          color="#FFE1E1"
        >
          {MokupPredicaoEsgotado.map(item => (
            <tr key={item.id}>
              <STD>{item.id}</STD>
              <STD>{item.nameProduct}</STD>
              <STD>{item.ultimaCom}</STD>
              <STD>{item.ProxCompra}</STD>
              <STD>{item.qtd}</STD>
              <STD>
                <ButtonDetalhesCheck type="button">
                  <IconCheckOne />
                </ButtonDetalhesCheck>
              </STD>
            </tr>
          ))}
        </ViewDataTable>
      </ContainerInfoHist>
    </>
  )
}
