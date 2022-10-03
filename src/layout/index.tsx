import * as React from 'react'
import { ReactNode, useState } from 'react'
import { Container } from '../App.Styled'
import { MainMenu } from '../components/menu/MainMenu'
import { Warpper } from '../components/menu/MainMenu.Styled'
import { Top } from '../components/Top/Top'
import { ContainerLayout } from './Layout.Styled'

type LayoutBaseProps = {
  children: ReactNode
}
export function LayoutBase({ children }: LayoutBaseProps) {
  const [isMiniMenuController, setIsiMenuController] = useState(false)
  const miniMenuFunction = () => setIsiMenuController(!isMiniMenuController)

  return (
    <Warpper>
      <MainMenu isMinimenu={isMiniMenuController} />
      <Container>
        <Top MiniMenu={miniMenuFunction} />
        <ContainerLayout>
          <div>{children}</div>
        </ContainerLayout>
      </Container>
    </Warpper>
  )
}
