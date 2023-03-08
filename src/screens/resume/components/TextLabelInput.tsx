import { Stack } from '@mui/material'
import React from 'react'

import { TextLabelInput as TextLabelInputStyled } from './styled'

interface ITextLabelInputProps {
  label: string
  required?: boolean
}

const TextLabelInput: React.FC<ITextLabelInputProps> = ({ label, required = true }) => {
  return (
    <Stack direction="row">
      <TextLabelInputStyled>
        {label}
        {required && <span style={{ color: 'red', marginLeft: '5px' }}>*</span>}
      </TextLabelInputStyled>
    </Stack>
  )
}

export { TextLabelInput }
