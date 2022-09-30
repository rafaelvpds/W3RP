import { ResumeDashboard } from '../../types'
import { apiService } from '../config/apiService'

export const GetResumeDashboard = async (
  dataFim: string,
  dataInicio: string
): Promise<ResumeDashboard> => {
  const result = await apiService.get('/dashboard/resumo', {
    params: {
      dataFim,
      dataInicio,
    },
  })
  return result.data
}
