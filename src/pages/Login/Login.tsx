import { useState } from 'react'

import { toast } from 'react-toastify'
import { Buttons } from '../../components/buttons/Buttons'
import { Input } from '../../components/inputsLogins/InputLogin'
import { Title } from '../../components/TitleLogin/Title'
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
import { AuthLogin } from '../../services/Auth/Auth'

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
        <Title isSubtitle text="Seja bem vindo!" />
        <Title isSubtitle={false} text="Realize seu Login" />
        <ContainerInput>
          <Input
            placeholder="E-mail"
            isPassword={false}
            onChange={event => setEmail(event.target.value)}
          />
          <ContainerLabel>
            <Label htmlFor="email">E-mail</Label>
          </ContainerLabel>
        </ContainerInput>
        <ContainerInput>
          <Input
            placeholder="Insira sua senha"
            isPassword
            onChange={event => setSenha(event.target.value)}
          />
          <ContainerLabel>
            <Label htmlFor="senha">Senha</Label>
          </ContainerLabel>
        </ContainerInput>
        <ContainerSapan>
          <SpanPassword>
            <Checkbox checked={check} onChange={() => setCheck(!check)} />
            <label htmlFor="checkbox">Lembrar-me</label>
          </SpanPassword>
          <span>Esqueci minha senha</span>
        </ContainerSapan>
        <Buttons theme="login" name="Entrar" onClick={doLogin} />
      </Wrapper>
      <ImagemLateral src={Imagem} />
    </ContenerLogin>
  )
}
