import * as React from 'react'

import {
  ContainerSpanClients,
  CotainerDataClients,
  SpanDataClient,
  TitleClient,
} from './Styles/DataClients.Styled'

type Props = {
  nameClients: string
  foneClients: string
  emailClient: string
  iconDataPhoneClient: React.ReactNode
  iconDataEmailClient: React.ReactNode
}
export function DataClients({
  iconDataPhoneClient,
  iconDataEmailClient,
  nameClients,
  foneClients,
  emailClient,
}: Props) {
  return (
    <CotainerDataClients>
      <TitleClient>{nameClients}</TitleClient>
      <ContainerSpanClients>
        {iconDataPhoneClient}

        <SpanDataClient>{foneClients}</SpanDataClient>
        {iconDataEmailClient}

        <SpanDataClient>{emailClient}</SpanDataClient>
      </ContainerSpanClients>
    </CotainerDataClients>
  )
}
