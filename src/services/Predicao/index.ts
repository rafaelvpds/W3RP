import { apiService } from '../config/apiService'
import { PredictionPage } from '../../types'

export const GetPrediction = async (query: string): Promise<PredictionPage> => {
  try {
    const result = await apiService.get('/predicao', {
      params: {
        query,
      },
    })
    return result.data
  } catch (error) {
    throw new Error('')
  }
}
