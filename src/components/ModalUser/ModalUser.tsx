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
}
export function ModalUser({
  textConfig,
  textLogOut,
  iconConfig,
  iconLogOut,
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
            <SpanTextConfig> {textLogOut}</SpanTextConfig>
          </LinkLogOut>
        </ContainerLogout>
      </ContentModalUser>
    </WarperModalUser>
  )
}
