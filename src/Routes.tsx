import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LayoutBase } from './layout'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login/Login'
import { Predicao } from './pages/Predicoes'
import { Historico } from './pages/Predicoes/Historico'
import { Produto } from './pages/Produtos'
import { Detalhamento } from './pages/Produtos/Detalhamento'

export function RoutesType() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
      </Routes>
      <LayoutBase>
        <Routes>
          <Route element={<Dashboard />} path="/" />
          <Route element={<Predicao />} path="/predicao" />
          <Route element={<Historico />} path="/historico/:id" />
          <Route element={<Produto />} path="/produto" />
          <Route element={<Detalhamento />} path="/detalhamento/:id" />
        </Routes>
      </LayoutBase>
    </BrowserRouter>
  )
}
