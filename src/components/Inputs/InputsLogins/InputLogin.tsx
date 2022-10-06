import * as React from 'react'
import { useState } from 'react'
import { IconEyeOffLine } from '../../../assets/icons/IconEyeOffLine'
import { IconEyes } from '../../../assets/icons/IconEyes'
import {
  ButtonEyes,
  ContainerButton,
  ContainerInput,
  InputLogin,
} from './Style/Login.Styled'

type InputProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  isPassword: boolean
}
export function Input({ onChange, isPassword, placeholder }: InputProps) {
  const [show, setShow] = useState(isPassword)
  const toggle = () => {
    setShow(!show)
  }
  return (
    <ContainerInput>
      <InputLogin
        onChange={onChange}
        placeholder={placeholder}
        type={show ? 'password' : 'email'}
      />
      <ContainerButton>
        {isPassword && (
          <ButtonEyes type="button" onClick={toggle}>
            {!show ? <IconEyes /> : <IconEyeOffLine />}
          </ButtonEyes>
        )}
      </ContainerButton>
    </ContainerInput>
  )
}
