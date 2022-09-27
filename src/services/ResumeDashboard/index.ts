import { ResumeDashboard } from '../../types'
import { apiService } from '../config/apiService'

export const GetResumeDashboard = async (): Promise<ResumeDashboard> => {
  const today = new Date()
  const result = await apiService.get('/dashboard/resumo', {
    params: {
      dataFim: today.toLocaleDateString('pt-BR'),
      dataInicio: new Date(
        new Date().setDate(today.getDate() - 30)
      ).toLocaleDateString('pt-BR'),
    },
  })
  return result.data
}
