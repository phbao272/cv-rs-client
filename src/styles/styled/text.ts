import { styled, Typography } from '@mui/material'

export const TextALine = styled(Typography)({
  display: '-webkit-box',
  '-webkit-line-clamp': 1,
  '-webkit-box-orient': 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})
