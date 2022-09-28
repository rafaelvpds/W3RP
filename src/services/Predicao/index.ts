import { apiService } from '../config/apiService'
import { PredictionPage } from '../../types'

export const GetPrediction = async (): Promise<PredictionPage> => {
  try {
    const result = await apiService.get('/predicao')
    return result.data
  } catch (error) {
    throw new Error('')
  }
}
