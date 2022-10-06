import * as React from 'react'
import { ContainerData, SpanEmail, SpanUser } from './Styles/User.Styled'

type UserProps = {
  user: string
  email: string
}
export function User({ user, email }: UserProps) {
  return (
    <ContainerData>
      <SpanUser>{user}</SpanUser>
      <SpanEmail>{email}</SpanEmail>
    </ContainerData>
  )
}
