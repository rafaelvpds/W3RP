import { Historic } from '../../types'
import { apiService } from '../config/apiService'

export const GetHistoric = async (id: string): Promise<Historic[]> => {
  try {
    const result = await apiService.get(`/predicao/${id}/historico`, {
      params: {
        id,
      },
    })
    return result.data
  } catch (error) {
    throw new Error('')
  }
}
