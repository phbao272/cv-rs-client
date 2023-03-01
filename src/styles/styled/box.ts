import { Box, Chip, styled } from '@mui/material'

export const BoxSpaceCenter = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const BoxSpaceBetween = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const BoxAlignCenter = styled(Box)({
  display: 'flex',
  alignItems: 'center',
})

export const ChipStyled = styled(Chip)({
  borderRadius: '4px',
  fontSize: '12px',
  fontWeight: 700,
})
