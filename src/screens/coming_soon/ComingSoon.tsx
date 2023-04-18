import { Box, Typography } from '@mui/material'
import React from 'react'

export const ComingSoon = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '40px',
      }}
    >
      <Typography
        sx={{
          fontSize: '30px',
          fontWeight: 'bold',
          color: '#444',
        }}
      >
        Tính năng đang được phát triển
      </Typography>
    </Box>
  )
}
