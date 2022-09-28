import { TypeClients } from '../../types'
import { apiService } from '../config/apiService'

export const GetDataClients = async (id: string): Promise<TypeClients> => {
  try {
    const result = await apiService.get(`/cliente/${id}`, {
      params: {
        id,
      },
    })
    return result.data
  } catch (error) {
    throw new Error('')
  }
}
