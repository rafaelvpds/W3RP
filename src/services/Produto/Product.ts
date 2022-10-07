import axios from 'axios'
import { toast } from 'react-toastify'
import { Product } from '../../types'
import { apiService } from '../config/apiService'

export const getDataProduct = async (
  query: string,
  page: number,
  classificacao?: 'EM_ALTA' | 'EM_BAIXA'
): Promise<{ data: Product[]; totalItens: number }> => {
  try {
    const result = await apiService.get('/produto', {
      params: {
        classificacao,
        query,
        page: page - 1,
        size: 7,
      },
    })

    return {
      data: result.data.content,
      totalItens: result.data.totalElements,
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        toast.error('Usuário não autorizado')
      }
      if (error.response?.status === 403) {
        toast.error('Não possui permissão de acesso')
      }
      if (error.response?.status === 404) {
        toast.error('Endereço buscado não existe!')
      }
    }
  }

  return {
    data: [],
    totalItens: 0,
  }
}
