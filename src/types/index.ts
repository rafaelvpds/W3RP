export type DataDashboard = {
  id: number
  nome: string
  percentual: number
}
export type Predicao = {
  id: number
  nome: string
  percentual: number
  quantidade: number
}
export type User = {
  email: string
  id: number
  nome: string
}
export type Historic = {
  id: number
  nome: string
  quantidade: number
  ultimaCompra: string
}
export type SoldOffProduct = {
  id: number
  nome: string
  proximaCompra: string
  quantidade: number
  ultimaCompra: string
}

export type TypeClients = {
  email: string
  nome: string
  telefone: string
}
export type ResumePredicao = {
  media120Dias: number
  nome: string
  percentualUltimos30Dias: number
  ultimos120Dias: number
  ultimos30Dias: number
  ultimos60Dias: number
  ultimos90Dias: number
}

export type PredicaoClient = {
  id: number
  nome: string
  percentual: number
  quantidade: number
}

export type PredictionPage = {
  content: {
    id: number
    nome: string
    produtos: {
      id: number
      nome: string
      proximaCompra: string
    }[]
  }[]
}

export type Product = {
  classificacao: 'EM_ALTA' | 'EM_BAIXA'
  id: number
  nome: string
  percentual: number
}
export type ResumoPredicaoClients = {
  media120Dias: number
  nome: string
  percentualUltimos30Dias: number
  ultimos120Dias: number
  ultimos30Dias: number
  ultimos60Dias: number
  ultimos90Dias: number
}
export type ResumeDashboard = {
  percentualTotalClientesAlta: number
  percentualTotalClientesBaixa: number
  percentualTotalProdutosAlta: number
  percentualTotalProdutosBaixa: number
  percentualVariacaoClientesAlta: number
  percentualVariacaoClientesBaixa: number
  percentualVariacaoProdutosAlta: number
  percentualVariacaoProdutosBaixa: number
  quantidadeClientesAlta: number
  quantidadeClientesBaixa: number
  quantidadeProdutosAlta: number
  quantidadeProdutosBaixa: number
}
