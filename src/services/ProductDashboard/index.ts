import { DataDashboard } from '../../types'
import { apiService } from '../config/apiService'

export const getProductApi = async (
  classificacao: 'EM_ALTA' | 'EM_BAIXA',
  dataFim: string,
  dataInicio: string
): Promise<DataDashboard[]> => {
  try {
    const result = await apiService.get('/dashboard/produtos', {
      params: {
        classificacao,
        dataFim,
        dataInicio,
      },
    })
    return result.data
  } catch (error) {
    console.log(error)
  }
  return []
}
