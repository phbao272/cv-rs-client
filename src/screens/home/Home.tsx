import { Grid } from '@mui/material'
import React from 'react'

import { BoxJob } from '@/components/Box'

export const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <BoxJob
          title={
            'Nhân Viên Kinh Doanh Nhân Viên Kinh Doanh Nhân Viên Kinh DoanhNhân Viên Kinh Doanh'
          }
          company={'CÔNG TY TNHH KỸ THUẬT Y TẾ VIỆT NAM'}
          location={'Hà Nội'}
          salary={'Thỏa thuận'}
        />
      </Grid>
      <Grid item xs={4}>
        <BoxJob
          title={'Nhân Viên Kinh Doanh'}
          company={'CÔNG TY TNHH KỸ THUẬT Y TẾ VIỆT NAM'}
          location={'Hà Nội'}
          salary={'Thỏa thuận'}
        />
      </Grid>
      <Grid item xs={4}>
        <BoxJob
          title={'Nhân Viên Kinh Doanh'}
          company={'CÔNG TY TNHH KỸ THUẬT Y TẾ VIỆT NAM'}
          location={'Hà Nội'}
          salary={'Thỏa thuận'}
        />
      </Grid>
    </Grid>
  )
}
