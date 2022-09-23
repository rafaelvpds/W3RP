// @flow
import * as React from 'react'
import { IconMail } from '../../assets/icons/IconMail'
import { IconPhone } from '../../assets/icons/IconPhone'
import {
  ContainerSpanClients,
  CotainerDataClients,
  SpanDataClient,
  TitleClient,
} from './DataClients.Styled'

type Props = {
  nameClients: string
  foneClients: string
  emailClient: string
}
export function DataClients({ nameClients, foneClients, emailClient }: Props) {
  return (
    <CotainerDataClients>
      <TitleClient>{nameClients}</TitleClient>
      <ContainerSpanClients>
        <IconPhone />
        <SpanDataClient>{foneClients}</SpanDataClient>
        <IconMail />
        <SpanDataClient>{emailClient}</SpanDataClient>
      </ContainerSpanClients>
    </CotainerDataClients>
  )
}
