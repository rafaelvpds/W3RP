import { createContext, useEffect, useState } from 'react'
import { apiService } from '../../services/config/apiService'

type AuthContextType = {
  authentified: boolean
  loading: boolean
}
export const AuthContext = createContext<AuthContextType>({
  authentified: false,
  loading: false,
})

export function AuthProvaider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [authentified, setAuthentified] = useState<boolean>(false)
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const conversion = JSON.parse(token)
      apiService.defaults.headers.common.Authorization = `${conversion.type} ${conversion.token}`
      setAuthentified(true)
    } else {
      setAuthentified(false)
    }
    setLoading(false)
  }, [])
  return (
    <AuthContext.Provider value={{ authentified, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
