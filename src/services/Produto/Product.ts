import { Product } from '../../types'
import { apiService } from '../config/apiService'

export const GetDataProduct = async (
  query: string,
  page: number,
  classificacao?: 'EM_ALTA' | 'EM_BAIXA'
): Promise<{ data: Product[]; totalItens: number }> => {
  try {
    const result = await apiService.get('/produto', {
      params: {
        classificacao,
        query,
        page,
        size: 7,
      },
    })

    return {
      data: result.data.content,
      totalItens: result.data.totalElements,
      // dataSearch: result.data.content,
    }
  } catch (error) {
    console.log(error, 'Erro da Api')
  }

  return {
    data: [],
    totalItens: 0,
  }
}
