import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
import { ToastContainer } from 'react-toastify'
import { LayoutBase } from './layout'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login/Login'
import { Predicao } from './pages/Predicoes'
import { Historico } from './pages/Predicoes/Historico'
import { Produto } from './pages/Produtos'
import { Detalhamento } from './pages/Detalhamento/Detalhamento'
import { DetalhamentoClients } from './pages/Detalhamento/DetalhamentoClients'
import { AuthContext, AuthProvaider } from './context/AuthContext/AuthContext'
import 'react-toastify/dist/ReactToastify.css'

function Private({ children }: { children: React.ReactNode }) {
  const { authentified, loading } = useContext(AuthContext)
  if (loading) {
    return <h1> Carregando...</h1>
  }
  if (!authentified) {
    return <Navigate to="/" />
  }
  return <LayoutBase>{children}</LayoutBase>
}

export function Rotas() {
  return (
    <BrowserRouter>
      <AuthProvaider>
        <Routes>
          <Route element={<Login />} path="/" />
          <Route
            element={
              <Private>
                <Dashboard />
              </Private>
            }
            path="/dashboard"
          />
          <Route
            element={
              <Private>
                <Predicao />
              </Private>
            }
            path="/predicao"
          />
          <Route
            element={
              <Private>
                <Historico />
              </Private>
            }
            path="/historico/:id"
          />
          <Route
            element={
              <Private>
                <Produto />
              </Private>
            }
            path="/produto"
          />
          <Route
            element={
              <Private>
                <Detalhamento />
              </Private>
            }
            path="/detalhamento/:id"
          />
          <Route
            element={
              <Private>
                <DetalhamentoClients />
              </Private>
            }
            path="/detalhamentocliente/:id"
          />
        </Routes>
      </AuthProvaider>
      <ToastContainer />
    </BrowserRouter>
  )
}
