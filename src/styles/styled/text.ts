import { styled, Typography } from '@mui/material'

export const TextALine = styled(Typography)({
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})
