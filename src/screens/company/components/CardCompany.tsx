import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

import PhotoDefault from '@/assets/images/logo-default.png'
import { StyledLink } from '@/styles'
import { colors } from '@/styles/colors'

interface Props {
  name: string
  description: string
  photo?: string
}

export const CardCompany: React.FC<Props> = ({ name, description, photo }) => {
  return (
    <Card
      sx={{
        display: 'block',
        boxShadow: '0 4px 20px rgb(224 224 224 / 25%)',
        borderRadius: '10px',
        paddingTop: '16px',
      }}
      component="div"
    >
      <CardMedia
        component="img"
        sx={{
          height: '64px',
          width: '64px',
          border: '1px solid #eee',
          objectFit: 'contain',
          marginLeft: '16px',
        }}
        image={photo || PhotoDefault}
        title="company photo"
      />
      <CardContent sx={{ height: '300px' }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: colors.primary,
            ':hover': {
              textDecoration: 'underline',
            },
          }}
        >
          <StyledLink to={'/'}>{name}</StyledLink>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}
