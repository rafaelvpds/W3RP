import { Product } from '../../types'
import { apiService } from '../config/apiService'

export const GetDataProduct = async (
  page: number
): Promise<{ data: Product[]; totalItens: number }> => {
  try {
    const result = await apiService.get('/produto', {
      params: {
        page,
        size: 7,
      },
    })

    return {
      data: result.data.content,
      totalItens: result.data.totalElements,
    }
  } catch (error) {
    console.log(error, 'Erro da Api')
  }

  return {
    data: [],
    totalItens: 0,
  }
}
