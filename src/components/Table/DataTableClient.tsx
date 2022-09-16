/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import { IconChevronRight } from '../../assets/icons/IconChevronRight'
import { STable, STBody, STH, STHead, STHeadTR } from './TableDashboard.Styled'
import { TableClient } from './TableClient'

const infoTable = [
  {
    id: '001',
    nameClient: 'Hótel Ibis',
    percentege: '-72%',
    icon: <IconChevronRight />,
  },
  {
    id: '002',
    nameClient: 'Restaurante Carretão',
    percentege: '-72%',
    icon: <IconChevronRight />,
  },
  {
    id: '003',
    nameClient: 'Nobile Hotel',
    percentege: '-72%',
    icon: <IconChevronRight />,
  },
  {
    id: '004',
    nameClient: 'Mc Donald’s',
    percentege: '-72%',
    icon: <IconChevronRight />,
  },
  {
    id: '005',
    nameClient: 'Hótel Ibis',
    percentege: '-72%',
    icon: <IconChevronRight />,
  },
  {
    id: '006',
    nameClient: 'Academia Smart Fit',
    percentege: '-72%',
    icon: <IconChevronRight />,
  },
]
const header = ['id', 'Cliente', 'Percentual', '']

export function ViewDataTableClient() {
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
          <TableClient
            key={newInfo.id}
            id={newInfo.id}
            nameClient={newInfo.nameClient}
            percentege={newInfo.percentege}
            icon={newInfo.icon}
          />
        ))}
      </STBody>
    </STable>
  )
}
