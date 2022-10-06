import * as React from 'react'

import {
  ButtonIcon,
  ContainerIconSeach,
  ContainerInput,
  InputPred,
} from './Style/inputPred.Styled'

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  icon: React.ReactNode
  filterButton: () => void
  value: string
}

export function InputPredicao({
  onChange,
  placeholder,
  icon,
  filterButton,
  value,
}: Props) {
  return (
    <ContainerInput>
      <InputPred
        onChange={onChange}
        placeholder={placeholder}
        type="text"
        value={value}
      />
      <ContainerIconSeach>
        <ButtonIcon onClick={filterButton} type="button">
          {icon}
        </ButtonIcon>
      </ContainerIconSeach>
    </ContainerInput>
  )
}
