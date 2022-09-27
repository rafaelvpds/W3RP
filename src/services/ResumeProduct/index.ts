import { ResumePredicao } from '../../types'
import { apiService } from '../config/apiService'

export const GetResumeProduct = async (id: string): Promise<ResumePredicao> => {
  try {
    const result = await apiService.get(`/produto/${id}/resumo`, {
      params: {
        id,
      },
    })
    return result.data
  } catch (error) {
    throw new Error('')
  }
}
