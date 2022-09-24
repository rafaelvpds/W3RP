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
      return {
        logged: true,
      }
      // eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwcmVkaWNhb0B3M2VycC5jb20uYnIiLCJpYXQiOjE2NjM5NTY2NDcsImV4cCI6MTY2NDA0MzA0N30.yPgEJu6HG1uOpdpETpOd82ThT6JRAgN25OFuxrWScFsDGKuLDt61gNj4OOBYVZ4wYJAVbPWUXt_mtDsAs_OBuQ
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
