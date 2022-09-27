import { DataDashboard } from '../../types'
import { apiService } from '../config/apiService'

export const GetProductClient = async (
  classificacao: 'EM_ALTA' | 'EM_BAIXA'
): Promise<DataDashboard[]> => {
  try {
    const today = new Date()
    const result = await apiService.get('/dashboard/produtos', {
      params: {
        classificacao,
        dataFim: today.toLocaleDateString('pt-BR'),
        dataInicio: new Date(
          new Date().setDate(today.getDate() - 30)
        ).toLocaleDateString('pt-BR'),
      },
    })
    return result.data
  } catch (error) {
    console.log(error)
  }
  return []
}
