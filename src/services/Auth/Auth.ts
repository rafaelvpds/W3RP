import axios from 'axios'
import { apiService } from '../config/apiService'

export const AuthLogin = async (login: string, password: string) => {
  try {
    const result = await apiService.post('/autenticacao/login', {
      email: login,
      senha: password,
    })
    if (result.status === 200) {
      apiService.defaults.headers.common.Authorization = `${result.data.type} ${result.data.token}`
      localStorage.setItem('token', JSON.stringify(result.data))
      return {
        logged: true,
      }
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400) {
        return {
          logged: false,
          message: 'Campos usuário ou senha não preenchido',
        }
      }
      if (error.response?.status === 401) {
        return { logged: false, message: 'Usuário não autorizado' }
      }
      if (error.response?.status === 403) {
        return { logged: false, message: 'Não possui permissão de acesso' }
      }
      if (error.response?.status === 404) {
        return { logged: false, message: 'Endereço buscado não existe!' }
      }
    }
  }

  return {
    logged: false,
    message: 'error',
  }
}
