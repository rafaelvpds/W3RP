import { useState } from 'react'

import { toast } from 'react-toastify'
import { Buttons } from '../../components/Buttons/Buttons'
import { Input } from '../../components/InputsLogins/InputLogin'
// import { Title } from '../../components/TitleLogin/Title'
import {
  ContainerInput,
  ContainerLabel,
  ContainerSapan,
  ContenerLogin,
  ImagemLateral,
  LabelLogin,
  SpanPassword,
  SubTitle,
  Title,
  Wrapper,
} from './Login.Styled'
import Imagem from '../../assets/images/BannerLatral.jpg'

import { Checkbox } from '../../components/Checkbox/Checkbox'
import { AuthLogin } from '../../services/Auth/Auth'
import {
  LabelCheck,
  SpanForgotPass,
} from '../../components/InputsLogins/Style/Login.Styled'

export function Login() {
  const [check, setCheck] = useState(false)
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const doLogin = async () => {
    const data = await AuthLogin(email, senha)

    if (data.logged) {
      toast.success('Login realizado com sucesso')
      window.location.href = '/dashboard'
      return
    }
    toast.error(data.message)
  }
  return (
    <ContenerLogin>
      <Wrapper>
        <SubTitle>Seja bem vindo!</SubTitle>
        <Title>Realize seu Login</Title>

        {/* <Title isSubtitle text="Seja bem vindo!" />
        <Title isSubtitle={false} text="Realize seu Login" /> */}
        <ContainerInput>
          <Input
            placeholder="E-mail"
            isPassword={false}
            onChange={event => setEmail(event.target.value)}
          />
          <ContainerLabel>
            <LabelLogin htmlFor="email">E-mail</LabelLogin>
          </ContainerLabel>
        </ContainerInput>
        <ContainerInput>
          <Input
            placeholder="Insira sua senha"
            isPassword
            onChange={event => setSenha(event.target.value)}
          />
          <ContainerLabel>
            <LabelLogin htmlFor="senha">Senha</LabelLogin>
          </ContainerLabel>
        </ContainerInput>
        <ContainerSapan>
          <SpanPassword>
            <Checkbox checked={check} onChange={() => setCheck(!check)} />
            <LabelCheck htmlFor="checkbox">Lembrar-me</LabelCheck>
          </SpanPassword>
          <SpanForgotPass>Esqueci minha senha</SpanForgotPass>
        </ContainerSapan>
        <Buttons theme="login" name="Entrar" onClick={doLogin} />
      </Wrapper>
      <ImagemLateral src={Imagem} />
    </ContenerLogin>
  )
}
