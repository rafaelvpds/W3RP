import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LayoutBase } from './layout'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login/Login'
import { Predicao } from './pages/Predições'
import { Produto } from './pages/Produtos'

export function RoutesType() {
  const logado = true
  return (
    <BrowserRouter>
      {logado ? (
        <LayoutBase>
          <Routes>
            <Route element={<Dashboard />} path="/" />
            <Route element={<Predicao />} path="/predicao" />
            <Route element={<Produto />} path="/produto" />
          </Routes>
        </LayoutBase>
      ) : (
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Navigate to="/login" />} path="*" />
        </Routes>
      )}
    </BrowserRouter>
  )
}
