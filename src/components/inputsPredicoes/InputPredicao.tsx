// @flow
import * as React from 'react'

import {
  ButtonIcon,
  ContainerIconSeach,
  ContainerInput,
  InputPred,
} from './inputPred.Styled'

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  icon: React.ReactNode
}
export function InputPredicao({ onChange, placeholder, icon }: Props) {
  return (
    <ContainerInput>
      <InputPred onChange={onChange} placeholder={placeholder} type="text" />
      <ContainerIconSeach>
        <ButtonIcon type="button">{icon}</ButtonIcon>
      </ContainerIconSeach>
    </ContainerInput>
  )
}
