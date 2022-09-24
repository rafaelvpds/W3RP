// @flow
import * as React from 'react'
import { Checkbox } from '../Checkbox/Checkbox'
import {
  ConteinerModalFilter,
  ContendModal,
  DivTypeFilter,
  SpanTotalFilter,
  SpanTypeFilter,
} from './ModalFilter.Styled'

type Props = {
  typeFilter: string
  totalFilter: number
  isCheck: boolean
  setCheck: () => void
}
export function ModalFilter({
  typeFilter,
  totalFilter,
  isCheck,
  setCheck,
}: Props) {
  return (
    <ConteinerModalFilter>
      <ContendModal>
        <DivTypeFilter>
          <Checkbox checked={isCheck} onChange={setCheck} />
          <SpanTypeFilter>{typeFilter}</SpanTypeFilter>
        </DivTypeFilter>
        <SpanTotalFilter>{totalFilter}</SpanTotalFilter>
      </ContendModal>
    </ConteinerModalFilter>
  )
}
