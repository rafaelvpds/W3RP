import { SoldOffProduct } from '../../types'
import { apiService } from '../config/apiService'

export const GetSoldOffProduct = async (
  id: string
): Promise<SoldOffProduct[]> => {
  try {
    const result = await apiService.get(`/predicao/${id}/esgotando`, {
      params: {
        id,
      },
    })
    return result.data
  } catch (error) {
    throw new Error('')
  }
}
