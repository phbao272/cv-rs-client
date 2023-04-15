import { Avatar, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

import PhotoDefault from '@/assets/images/logo-default.png'
import { TextEllipsis } from '@/components/Text'
import { ICompany } from '@/libs/types/company'
import { TextHeader } from '@/styles'
import { colors } from '@/styles/colors'

interface Props {
  company: ICompany
}

export const HotCompany: React.FC<Props> = ({ company }) => {
  return (
    <Grid container>
      <Grid item xs={4}>
        <Avatar
          variant="square"
          src={company.photo || PhotoDefault}
          sx={{
            border: '1px solid #e9eaec',
            width: '90%',
            height: '90%',
            borderRadius: '4px',
            '& .MuiAvatar-img': { objectFit: 'contain' },
          }}
        />
      </Grid>
      <Grid item xs={8} sx={{ paddingRight: '20px' }}>
        <Stack sx={{ justifyContent: 'flex-start', alignItems: 'flex-start', width: '90%' }}>
          <TextHeader
            sx={{
              fontSize: 18,
              color: colors.primary,
              margin: 0,
              textAlign: 'left',
              textTransform: 'capitalize',
            }}
          >
            {company.name}
          </TextHeader>
          <TextEllipsis sx={{ fontSize: 14, marginTop: '12px' }} lineClamp={3}>
            {company.description}
          </TextEllipsis>

          <Typography sx={{ fontSize: 14, marginTop: '12px' }}>Hà Nội</Typography>
          <Typography
            sx={{ fontSize: 14, marginTop: '12px', color: colors.primary, fontWeight: 'bold' }}
          >
            Công việc đang tuyển: {company.jobs_count}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  )
}
