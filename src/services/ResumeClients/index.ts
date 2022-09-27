import { ResumoPredicaoClients } from '../../types'
import { apiService } from '../config/apiService'

export const GetResumeClients = async (
  id: string
): Promise<ResumoPredicaoClients> => {
  try {
    const result = await apiService.get(`/cliente/${id}/resumo`, {
      params: {
        id,
      },
    })
    return result.data
  } catch (error) {
    throw new Error('')
  }
}
