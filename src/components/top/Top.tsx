// @flow
import * as React from 'react'
import { useState } from 'react'

import { IconChevronDown } from '../../assets/icons/IconChevronDown'
import { IconLogout } from '../../assets/icons/IconLogout'

//
import { IconMenu } from '../../assets/icons/IconMenu'
import { IconSetting } from '../../assets/icons/IconSetting'
import { IconUser } from '../../assets/icons/IconUser'
import { ModalUser } from '../ModalUser/ModalUser'

import { User } from '../user/User'
import {
  ButtonChevronDown,
  ContainerModalUser,
  ContainerUser,
  DivIcon,
  DivMenu,
  TopUser,
} from './Top.Styled'

export function Top() {
  const [isShowModal, setIsShowModal] = useState(false)

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
        <ButtonChevronDown
          type="button"
          onClick={() => setIsShowModal(!isShowModal)}
        >
          <IconChevronDown />
        </ButtonChevronDown>
        {isShowModal && (
          <ContainerModalUser>
            <ModalUser
              iconConfig={<IconSetting />}
              textConfig="Configurações"
              iconLogOut={<IconLogout />}
              textLogOut="Sair"
            />
          </ContainerModalUser>
        )}
      </ContainerUser>
    </TopUser>
  )
}
