import { styled, Typography } from '@mui/material'

export const TextALine = styled(Typography)({
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})

export const TextHeader = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '24px',
  textTransform: 'uppercase',
  color: '#333',
  padding: '24px 0',
})
