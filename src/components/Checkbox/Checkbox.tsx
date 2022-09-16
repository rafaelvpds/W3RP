import React from 'react'

type CheckboxProps = {
  checked: boolean
  onChange: () => void
}

export function Checkbox({ checked, onChange }: CheckboxProps) {
  return (
    <label className="container">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="checkbox"
      />
      <span className="checkmark" />
    </label>
  )
}
