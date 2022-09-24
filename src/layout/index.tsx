// @flow
import * as React from 'react'
import { ReactNode } from 'react'
import { Container } from '../App.Styled'
import { MainMenu } from '../components/menu/MainMenu'
import { Warpper } from '../components/menu/MainMenu.Styled'
import { Top } from '../components/Top/Top'
import { ContainerLayout } from './Layout.Styled'

type LayoutBaseProps = {
  children: ReactNode
}
export function LayoutBase({ children }: LayoutBaseProps) {
  return (
    <Warpper>
      <MainMenu />
      <Container>
        <Top />
        <ContainerLayout>
          <div>{children}</div>
        </ContainerLayout>
      </Container>
    </Warpper>
  )
}
