import * as React from 'react'
import { ContainerData, ContainerEmail, ContainerUser } from './User.Styled'

type UserProps = {
  user: string
  email: string
}
export function User({ user, email }: UserProps) {
  return (
    <ContainerData>
      <ContainerUser>{user}</ContainerUser>
      <ContainerEmail>{email}</ContainerEmail>
    </ContainerData>
  )
}
