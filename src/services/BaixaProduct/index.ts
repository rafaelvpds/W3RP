import { apiService } from '../config/apiService'

export const PostProduct = async (
  id: string,
  produtoId: number
): Promise<void> => {
  try {
    await apiService.post(`/predicao/${id}/baixa`, {
      produtoId,
    })
  } catch (error) {
    throw new Error('')
  }
}
