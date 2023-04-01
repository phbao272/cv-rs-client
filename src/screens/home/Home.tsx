import { Grid } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

import { BoxJob } from '@/components/Box'
import { IJob } from '@/libs/types'
import { BoxAlignCenterVertical, TextHeader } from '@/styles/styled'

export const Home = () => {
  const { isLoading, data: jobs } = useQuery<IJob[]>(['get-job'])

  return (
    <BoxAlignCenterVertical>
      <TextHeader>Danh sách việc làm nổi bật</TextHeader>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Grid
          container
          spacing={2}
          sx={{
            backgroundColor: '#fff',
            paddingBottom: '16px',
            paddingRight: '16px',
            borderRadius: '8px',
          }}
        >
          {jobs?.map((job, index) => (
            <Grid item xs={4} key={index}>
              <BoxJob
                job_id={job.id}
                title={job.title}
                company_name={job.company.name}
                company_id={job.company.id}
                location={job.location.name}
                salary={job.salary.name}
                photo={job.company.photo}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </BoxAlignCenterVertical>
  )
}
