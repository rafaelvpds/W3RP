// @flow
import * as React from 'react'
import { IconChevronDown } from '../../assets/icons/IconChevronDown'

//
import { IconMenu } from '../../assets/icons/IconMenu'
import { IconUser } from '../../assets/icons/IconUser'
import { User } from '../user/User'
import { ContainerUser, DivIcon, DivMenu, TopUser } from './Top.Styled'

export function Top() {
  return (
    <TopUser>
      <DivMenu>
        <IconMenu />
      </DivMenu>
      <ContainerUser>
        <DivIcon>
          <IconUser />
        </DivIcon>
        <User email="rafaelvpds@gmail.com" user="Rafael" />
        <IconChevronDown />
      </ContainerUser>
    </TopUser>
  )
}
