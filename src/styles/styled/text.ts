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
  margin: '24px 0',
})

export const Logo = styled(Typography)({
  fontSize: '36px',
  background: 'linear-gradient(43deg,#4158d0 0%,#c850c0 46%,#ffcc70 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  width: 'max-content',
  fontWeight: 700,
  margin: 0,
})
