import { Grid } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

import { BoxJobFull } from '@/components/Box'
import { IJob } from '@/libs/types'

export const ListJob = () => {
  const { data, isLoading } = useQuery<IJob>(['list-job'])

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    data?.map((job, index) => (
      <Grid item xs={6} key={index} sx={{ height: '100%' }}>
        <BoxJobFull
          job_id={job.id}
          title={job.title}
          description={job.description}
          company_name={job.company.name}
          company_id={job.company.id}
          location={job.location.name}
          salary={job.salary.name}
          photo={job.company.photo}
          skills={job.job_skills}
        />
      </Grid>
    ))
  )
}
