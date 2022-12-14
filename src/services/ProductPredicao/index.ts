import axios from 'axios'
import { apiService } from '../config/apiService'

export const GetPrediProduto = async (
  id: string,
  classificacao: 'EM_ALTA' | 'EM_BAIXA'
) => {
  try {
    const result = await apiService.get(`/produto/${id}/clientes`, {
      params: {
        id,
        classificacao,
      },
    })
    if (result.status === 200) {
      return result.data
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
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
