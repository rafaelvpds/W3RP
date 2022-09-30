// @flow
import * as React from 'react'
import { ReactNode } from 'react'
import {
  ContainerConfig,
  ContainerLogout,
  ContentModalUser,
  LineModalUser,
  LinkLogOut,
  SpanTextConfig,
  WarperModalUser,
} from './ModalUser.Styled'

type Props = {
  textConfig: string
  textLogOut: string
  iconConfig: ReactNode
  iconLogOut: ReactNode
  logout: () => void
}
export function ModalUser({
  textConfig,
  textLogOut,
  iconConfig,
  iconLogOut,
  logout,
}: Props) {
  return (
    <WarperModalUser>
      <ContentModalUser>
        <ContainerConfig>
          <span>{iconConfig}</span>
          <SpanTextConfig>{textConfig}</SpanTextConfig>
        </ContainerConfig>

        <LineModalUser />
        <ContainerLogout>
          <LinkLogOut to="/">
            <span>{iconLogOut}</span>
            <SpanTextConfig onClick={logout}> {textLogOut}</SpanTextConfig>
          </LinkLogOut>
        </ContainerLogout>
      </ContentModalUser>
    </WarperModalUser>
  )
}
