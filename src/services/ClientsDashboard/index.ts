import axios from 'axios'
import { apiService } from '../config/apiService'

export const getListClient = async (
  classificacao: 'EM_ALTA' | 'EM_BAIXA',
  dataFim: string,
  dataInicio: string
) => {
  try {
    const result = await apiService.get('/dashboard/clientes', {
      params: {
        classificacao,
        dataFim,
        dataInicio,
      },
    })
    if (result.status === 200) {
      return result.data
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
