import { Grid } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'

import { BoxJob, BoxJobFull } from '@/components/Box'
import { useAuth, useRecommender } from '@/libs/hooks'
import { IJob } from '@/libs/types'
import { BoxAlignCenterVertical, TextHeader } from '@/styles/styled'

export const Home = () => {
  const { isLoading, data: jobs } = useQuery<IJob[]>(['get-job'])

  const { auth } = useAuth()
  const { dataRec, fetchRecommender, isLoadingRec } = useRecommender()

  console.log('data', dataRec)

  useEffect(() => {
    fetchRecommender()
  }, [])

  return (
    <BoxAlignCenterVertical>
      {auth ? (
        isLoadingRec ? (
          <p>Loading...</p>
        ) : (
          <>
            <TextHeader sx={{ marginBottom: '40px' }}>Danh sách việc làm phù hợp</TextHeader>
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
              {dataRec?.map((job, index) => (
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
              ))}
            </Grid>
          </>
        )
      ) : null}

      <TextHeader sx={{ marginBottom: '40px' }}>Danh sách việc làm</TextHeader>
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
