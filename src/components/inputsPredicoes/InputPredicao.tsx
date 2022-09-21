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

const filterFunction = () => {
  alert('Deu Certo')
}

export function InputPredicao({ onChange, placeholder, icon }: Props) {
  return (
    <ContainerInput>
      <InputPred onChange={onChange} placeholder={placeholder} type="text" />
      <ContainerIconSeach>
        <ButtonIcon onClick={filterFunction} type="button">
          {icon}
        </ButtonIcon>
      </ContainerIconSeach>
    </ContainerInput>
  )
}
