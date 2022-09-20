/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-children-prop */
// @flow
// import { useState } from 'react'
import { useState } from 'react'
import { Buttons } from '../../components/buttons/Buttons'
import { Input } from '../../components/inputsLogins/InputLogin'
import { Title } from '../../components/titleLogin/Title'
import {
  ContainerInput,
  ContainerLabel,
  ContainerSapan,
  ContenerLogin,
  ImagemLateral,
  SpanPassword,
  Wrapper,
} from './Login.Styled'
import Imagem from '../../assets/images/BannerLatral.jpg'
import { Label } from '../../components/label/Label'
import { Checkbox } from '../../components/Checkbox/Checkbox'

export function Login() {
  const [check, setCheck] = useState(false)
  const hadleUser = () => {
    console.log('meu nome')
  }
  return (
    <ContenerLogin>
      <Wrapper>
        <Title isSubtitle text="Seja bem vindo!" />
        <Title isSubtitle={false} text="Realize seu Login" />
        <ContainerInput>
          <Input placeholder="E-mail" isPassword={false} onChange={hadleUser} />
          <ContainerLabel>
            <Label children="E-mail" htmlFor="email" />
          </ContainerLabel>
        </ContainerInput>
        <ContainerInput>
          <Input
            placeholder="Insira sua senha"
            isPassword
            onChange={hadleUser}
          />
          <ContainerLabel>
            <Label children="Senha" htmlFor="senha" />
          </ContainerLabel>
        </ContainerInput>
        <ContainerSapan>
          <SpanPassword>
            <Checkbox checked={check} onChange={() => setCheck(!check)} />
            <label htmlFor="checkbox">Lembrar-me</label>
          </SpanPassword>
          <span>Esqueci minha senha</span>
        </ContainerSapan>
        <Buttons theme="login" name="Entrar" />
      </Wrapper>
      <ImagemLateral src={Imagem} />
    </ContenerLogin>
  )
}
