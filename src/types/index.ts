export type DataDashboard = {
  // DataClientDashboard
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
