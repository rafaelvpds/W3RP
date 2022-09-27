import { Predicao } from '../../types'
import { apiService } from '../config/apiService'

export const GetPrediProduto = async (
  id: string,
  classificacao: 'EM_ALTA' | 'EM_BAIXA'
): Promise<Predicao[]> => {
  try {
    const result = await apiService.get(`/produto/${id}/clientes`, {
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
