// @flow
import * as React from 'react'
import { IconChevronLeft } from '../../assets/icons/IconChevronLeft'
import { IconChevronRight } from '../../assets/icons/IconChevronRight'
import {
  ButtonIconPage,
  DivNextPage,
  DivPagination,
  SpanNumPage,
  SpanQtdeLista,
} from './Pagination.Styled'

type Props = {
  currentPage: number
  totalItens: number

  updatePage: (pageNumber: number) => void
}
export function Pagination({ updatePage, currentPage, totalItens }: Props) {
  const pageNumber = [1, 2, 3, 4, 5]
  return (
    <DivPagination>
      <SpanQtdeLista>
        {(currentPage + 1) * 7} de {totalItens} itens
      </SpanQtdeLista>
      <DivNextPage>
        <ButtonIconPage onClick={() => updatePage(currentPage - 1)}>
          <IconChevronLeft />
        </ButtonIconPage>
        {pageNumber.map(item => (
          <SpanNumPage>{item}</SpanNumPage>
        ))}
        <ButtonIconPage onClick={() => updatePage(currentPage + 1)}>
          <IconChevronRight />
        </ButtonIconPage>
      </DivNextPage>
    </DivPagination>
  )
}
