import { Box, styled, Typography } from '@mui/material'

export const TextHeader = styled(Typography)({
  marginBottom: '30px',
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: 1,
  color: 'rgb(57, 62, 70)',
})

export const TextLabelInput = styled(Typography)({
  fontSize: '16px',
  fontWeight: 700,
  width: '120px',
  marginRight: '30px',
})

export const ContainerInput = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
})
