import * as React from 'react'

import { IconChevronLeft } from '../../assets/icons/IconChevronLeft'
import { IconChevronRight } from '../../assets/icons/IconChevronRight'
import {
  ButtonIconPage,
  DivNextPage,
  DivPagination,
  SpanNumPage,
  SpanQtdeLista,
} from './Styles/Pagination.Styled'

type Props = {
  currentPage: number
  totalItens: number
  size: number

  updatePage: (page: number) => void
}

export function Pagination({
  updatePage,
  currentPage,
  totalItens,
  size,
}: Props) {
  const length = Math.ceil(totalItens / size)
  const pageNumber = Array.from({ length }, (_, index) => index + 1)
  return (
    <DivPagination>
      <SpanQtdeLista>
        {(currentPage + 1) * 7} de {totalItens} itens
      </SpanQtdeLista>
      <DivNextPage>
        {length > 1 && currentPage > 1 && (
          <ButtonIconPage onClick={() => updatePage(currentPage - 1)}>
            <IconChevronLeft />
          </ButtonIconPage>
        )}

        {pageNumber.map(item => (
          <SpanNumPage
            onClick={() => updatePage(item)}
            className={currentPage === item ? 'active' : ''}
          >
            {item}
          </SpanNumPage>
        ))}
        {length > 1 && length < currentPage && (
          <ButtonIconPage onClick={() => updatePage(currentPage + 1)}>
            <IconChevronRight />
          </ButtonIconPage>
        )}
      </DivNextPage>
    </DivPagination>
  )
}
