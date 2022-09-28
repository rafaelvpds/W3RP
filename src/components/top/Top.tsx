// @flow
import * as React from 'react'
import { useEffect, useState } from 'react'

import { IconChevronDown } from '../../assets/icons/IconChevronDown'
import { IconLogout } from '../../assets/icons/IconLogout'

//
import { IconMenu } from '../../assets/icons/IconMenu'
import { IconSetting } from '../../assets/icons/IconSetting'
import { IconUser } from '../../assets/icons/IconUser'
import { getCurrentUser } from '../../services/DadosUsuario/DataUser'
import { ModalUser } from '../ModalUser/ModalUser'

import { User as UserType } from '../../types'
import {
  ButtonChevronDown,
  ContainerModalUser,
  ContainerUser,
  DivIcon,
  DivMenu,
  TopUser,
} from './Top.Styled'
import { User } from '../user/User'

export function Top() {
  const [isShowModal, setIsShowModal] = useState(false)
  const [user, setUser] = useState<UserType>()

  const getDataUser = async () => {
    const data = await getCurrentUser()
    setUser(data)
  }
  useEffect(() => {
    getDataUser()
  }, [])

  return (
    <TopUser>
      <DivMenu>
        <IconMenu />
      </DivMenu>
      <ContainerUser>
        <DivIcon>
          <IconUser />
        </DivIcon>
        <User email={user?.email || ''} user={user?.nome || ''} />
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
