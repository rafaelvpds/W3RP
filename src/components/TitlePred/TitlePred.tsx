// @flow

import {
  ContainerTitulPred,
  SpanIconTablePred,
  TiteDataPred,
} from '../../pages/Predições/Predicao.Styled'

type Props = {
  icon: React.ReactNode
  text: string
}
export function TitleCardPred({ icon, text }: Props) {
  return (
    <ContainerTitulPred>
      <SpanIconTablePred>{icon}</SpanIconTablePred>
      <TiteDataPred>{text}</TiteDataPred>
    </ContainerTitulPred>
  )
}
