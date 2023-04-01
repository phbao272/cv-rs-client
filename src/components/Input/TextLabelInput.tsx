import { Stack } from '@mui/material'
import React from 'react'

import { TextLabelInput as TextLabelInputStyled } from '@/screens/resume/components/styled'

interface ITextLabelInputProps {
  label: string
  required?: boolean
  style?: React.CSSProperties
}

const TextLabelInput: React.FC<ITextLabelInputProps> = ({ label, required = true, style }) => {
  return (
    <Stack direction="row">
      <TextLabelInputStyled sx={style}>
        {label}
        {required && <span style={{ color: 'red', marginLeft: '5px' }}>*</span>}
      </TextLabelInputStyled>
    </Stack>
  )
}

export { TextLabelInput }
