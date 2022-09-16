/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import { IconChevronRight } from '../../assets/icons/IconChevronRight'
import { TableProduct } from './TableProduct'
import { STable, STBody, STH, STHead, STHeadTR } from './TableDashboard.Styled'

const infoTable = [
  {
    id: '001',
    nameProduct: 'Papel higiênico',
    percentege: '-72%',
    icon: <IconChevronRight />,
  },
  {
    id: '002',
    nameProduct: 'Álcool em gel',
    percentege: '68%',
    icon: <IconChevronRight />,
  },
  {
    id: '003',
    nameProduct: 'Sabonete',
    percentege: '-68%',
    icon: <IconChevronRight />,
  },
  {
    id: '004',
    nameProduct: 'Perfume',
    percentege: '-72%',
    icon: <IconChevronRight />,
  },
  {
    id: '005',
    nameProduct: 'Água sanitária',
    percentege: '68%',
    icon: <IconChevronRight />,
  },
  {
    id: '006',
    nameProduct: 'Detergente ',
    percentege: '-68%',
    icon: <IconChevronRight />,
  },
]
const header = ['id', 'Produto', 'Percentual', '']

export function ViewDataTable() {
  return (
    <STable>
      <STHead>
        <STHeadTR>
          {header.map((newHeader, index) => (
            <STH key={index}>{newHeader}</STH>
          ))}
        </STHeadTR>
      </STHead>
      <STBody>
        {infoTable.map(newInfo => (
          <TableProduct
            key={newInfo.id}
            id={newInfo.id}
            nameProduct={newInfo.nameProduct}
            percentege={newInfo.percentege}
            icon={newInfo.icon}
          />
        ))}
      </STBody>
    </STable>
  )
}
