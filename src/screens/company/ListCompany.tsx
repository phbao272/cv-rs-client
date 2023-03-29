import { Grid } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

import { BoxAlignCenterVertical, TextHeader } from '@/styles'

import { CardCompany } from './components'

export const ListCompany = () => {
  const { isLoading, data } = useQuery(['company'], {
    onSuccess: (data) => {
      console.log(data)
    },
  })

  console.log(isLoading)

  return (
    <BoxAlignCenterVertical>
      <TextHeader>Danh sách công ty</TextHeader>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <CardCompany />
        </Grid>
        <Grid xs={4}>
          <CardCompany />
        </Grid>
        <Grid xs={4}>
          <CardCompany />
        </Grid>
      </Grid>
    </BoxAlignCenterVertical>
  )
}
