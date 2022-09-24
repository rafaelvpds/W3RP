// @flow
import * as React from 'react'
import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ContainerModal } from './ModalUser.Styled'

type Props = {
  textConfig: string
  textLogOut: string
  iconConfig: ReactNode
  iconLogOut: ReactNode
}
export function ModalUser({
  textConfig,
  textLogOut,
  iconConfig,
  iconLogOut,
}: Props) {
  return (
    <ContainerModal>
      <ul>
        <li>
          {iconConfig}
          {textConfig}
        </li>
        <li>
          <Link to="/login">
            {iconLogOut}
            {textLogOut}
          </Link>
        </li>
      </ul>
    </ContainerModal>
  )
}
