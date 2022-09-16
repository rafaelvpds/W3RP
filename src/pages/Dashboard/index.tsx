/* eslint-disable react/no-children-prop */
// @flow
import * as React from 'react'
import { IconEveryUser } from '../../assets/icons/IconEveryUser'

import { IconProduct } from '../../assets/icons/IconProduct'
import { BackgroundTable } from '../../components/backgroundTable/Background.Styled'
import { Buttons } from '../../components/buttons/Buttons'

import { ViewDataTable } from '../../components/Table/DataTable'
import { ViewDataTableClient } from '../../components/Table/DataTableClient'
import { TitleDashboard } from '../../components/titleDashbord/TitleDashboard'
import {
  BackgroundIcon,
  BackgroundIconEverUser,
  CardPricipal,
  ContainerInfoProd,
  ContainerTable,
  ContainerTitle,
  ContentInfo,
} from './Dashboard.Styled'

export function Dashboard() {
  return (
    <>
      <CardPricipal>
        <ContainerTitle>
          <TitleDashboard isSubtitle={false} children="Dashboard" />
        </ContainerTitle>
      </CardPricipal>

      <ContainerTable>
        <BackgroundTable>
          <ContentInfo>
            <ContainerInfoProd>
              <BackgroundIcon>
                <IconProduct />
              </BackgroundIcon>
              <TitleDashboard isSubtitle children="Produtos" />
            </ContainerInfoProd>

            <div>
              <Buttons name="Em alta" theme="statusAlta" />
              <Buttons name="Em baixa" theme="statusBaixa" />
            </div>
          </ContentInfo>
          <ViewDataTable />
        </BackgroundTable>

        <BackgroundTable>
          <ContentInfo>
            <ContainerInfoProd>
              <BackgroundIconEverUser>
                <IconEveryUser />
              </BackgroundIconEverUser>
              <TitleDashboard isSubtitle children="Cliente" />
            </ContainerInfoProd>

            <div>
              <Buttons name="Em alta" theme="statusAlta" />
              <Buttons name="Em baixa" theme="statusBaixa" />
            </div>
          </ContentInfo>
          <ViewDataTableClient />
        </BackgroundTable>
      </ContainerTable>
    </>
  )
}
