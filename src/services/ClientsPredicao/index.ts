import { PredicaoClient } from '../../types'
import { apiService } from '../config/apiService'

export const GetPredicaoClients = async (
  id: string,
  classificacao: 'EM_ALTA' | 'EM_BAIXA'
): Promise<PredicaoClient[]> => {
  try {
    const result = await apiService.get(`/cliente/${id}/produtos`, {
      params: {
        id,
        classificacao,
      },
    })
    return result.data
  } catch (error) {
    console.log(error)
  }
  return []
}
