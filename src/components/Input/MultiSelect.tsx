import CancelIcon from '@mui/icons-material/Cancel'
import {
  Box,
  Chip,
  MenuItem,
  MenuProps,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material'
import React, { useEffect, useState } from 'react'

export type OptionType = {
  label: string
  value: unknown
}

interface Props<T> {
  options: OptionType[]
  onChange: (value: T[]) => void
  value: T[]
  menuProps?: MenuProps
  fullWidth?: boolean
}

const MultiSelect = <T,>({ options, onChange, value, menuProps, ...props }: Props<T>) => {
  const [newOptions, setNewOptions] = useState<OptionType[]>(options)

  const [isOpenOptions, setIsOpenOptions] = useState(false)

  useEffect(() => {
    setNewOptions([...options, { label: 'Tất cả', value: 'all' }])
  }, [options])

  const handleClose = () => {
    setIsOpenOptions(false)
  }

  const handleOpen = () => {
    setIsOpenOptions(true)
  }

  const handleChange = (newValue: SelectChangeEvent<T[]>) => {
    onChange(newValue.target.value as T[])
  }

  const handleDelete = (item: any) => {
    const newValue = value.filter((e) => e !== item)

    onChange(newValue)
  }

  return (
    <Select
      multiple
      open={isOpenOptions}
      onClose={handleClose}
      onOpen={handleOpen}
      value={value ? value : []}
      onChange={handleChange}
      input={<OutlinedInput />}
      fullWidth
      MenuProps={{
        style: {
          maxHeight: 250,
        },
        ...menuProps,
      }}
      renderValue={(selected) => (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {selected.map((selectedValue) => {
            const selectedOpt = options.find((e) => e.value === selectedValue)

            return (
              selectedOpt && (
                <Chip
                  size="small"
                  key={selectedOpt.value as unknown as string}
                  label={selectedOpt.label}
                  deleteIcon={<CancelIcon onMouseDown={(event) => event.stopPropagation()} />}
                  onDelete={() => handleDelete(selectedValue)}
                />
              )
            )
          })}
        </Box>
      )}
      {...props}
    >
      {newOptions.map((option) => (
        <MenuItem key={option.label} value={option.value as unknown as number | string}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  )
}

export { MultiSelect }
