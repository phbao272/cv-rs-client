import { Typography } from '@mui/material'
import React from 'react'

interface Props {
  lineClamp?: number
  sx?: any
}

export const TextEllipsis: React.FC<Props> = ({ lineClamp = 1, children, ...props }) => {
  return (
    <Typography
      style={{
        display: '-webkit-box',
        WebkitLineClamp: lineClamp,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textAlign: 'left',
        ...props.sx,
      }}
    >
      {children}
    </Typography>
  )
}
