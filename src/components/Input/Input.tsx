import { TextField, TextFieldProps } from '@mui/material'
import React from 'react'

type Props = {
  helperText?: string
  error?: boolean
  required?: boolean
  fullWidth?: boolean
} & TextFieldProps

const Input: React.FC<Props> = ({
  required = false,
  fullWidth = false,
  helperText,
  error,
  ...props
}) => {
  return (
    <TextField
      required={required}
      fullWidth={fullWidth}
      helperText={error && helperText}
      error={!!error}
      {...props}
    />
  )
}

export { Input }
