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
      if (error.response?.status === 401) {
        return { logged: false, message: 'Usuario ou senha Incorreta' }
      }
    }
  }

  return {
    logged: false,
    message: 'error',
  }
}
