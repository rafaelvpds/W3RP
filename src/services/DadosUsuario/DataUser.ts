import { User } from '../../types'
import { apiService } from '../config/apiService'

export const getCurrentUser = async (): Promise<User> => {
  try {
    const result = await apiService.get('/usuario/me')
    return result.data
  } catch (error) {
    throw new Error('')
  }
}
