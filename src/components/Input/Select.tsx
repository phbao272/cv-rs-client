import { MenuItem, MenuProps, Select as SelectMUI, SelectChangeEvent } from '@mui/material'
import React, { useState } from 'react'

type OptionType = {
  label: string
  value: unknown
}

interface Props<T> {
  options: OptionType[]
  onChange: (value: T) => void
  value: T
  menuProps?: MenuProps
  fullWidth?: boolean
}

const Select = <T,>({ options, onChange, value, menuProps, fullWidth = true }: Props<T>) => {
  const [isOpenOptions, setIsOpenOptions] = useState(false)

  const handleClose = () => {
    setIsOpenOptions(false)
  }

  const handleOpen = () => {
    setIsOpenOptions(true)
  }

  const handleChange = (newValue: SelectChangeEvent<T>) => {
    onChange(newValue.target.value as T)
  }

  return (
    <SelectMUI
      open={isOpenOptions}
      onClose={handleClose}
      onOpen={handleOpen}
      value={value ? value : ''}
      onChange={handleChange}
      fullWidth={fullWidth}
      MenuProps={{
        style: {
          maxHeight: 250,
        },
        ...menuProps,
      }}
    >
      {options.map((option) => (
        <MenuItem key={option.label} value={option.value as any}>
          {option.label}
        </MenuItem>
      ))}
    </SelectMUI>
  )
}

export { Select }
