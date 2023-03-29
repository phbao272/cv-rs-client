import { DatePicker as DatePickerMUI } from '@mui/x-date-pickers/DatePicker'
import { parseISO } from 'date-fns'
import React from 'react'

interface Props {
  value: Date
  onChange: (date: Date) => void
  required?: boolean
  fullWidth?: boolean
  error?: boolean
  helperText?: string
}

export const DatePicker = ({ value, onChange }: Props) => {
  const handleChangeDate = (d: any) => {
    onChange(d)
  }

  return (
    <DatePickerMUI
      value={new Date(value)}
      maxDate={parseISO(new Date() as unknown as string)}
      onChange={handleChangeDate}
      format="dd-MM-yyyy"
    />
  )
}
