import { Box, Grid } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'

import { BoxJob, BoxJobFull } from '@/components/Box'
import { SearchBox } from '@/components/Search'
import { useRecommender } from '@/libs/hooks'
import { IJob, IJobDjango } from '@/libs/types'
import { colors } from '@/styles/colors'
import { BoxAlignCenterVertical, TextHeader } from '@/styles/styled'

import { Slider } from './Slider'
import { SliderCompany } from './SliderCompany'
export const Home = () => {
  const { isLoading, data: jobs } = useQuery<IJob[]>(['get-job'])
  const { dataRec, fetchRecommender, isLoadingRec } = useRecommender()

  // console.log('data', dataRec)

  const [jobSearch, setJobSearch] = React.useState<IJob[]>([])

  useEffect(() => {
    fetchRecommender()
  }, [])

  return (
    <BoxAlignCenterVertical>
      <SearchBox setJobSearch={setJobSearch} />

      {jobSearch && jobSearch.length > 0 && (
        <Box>
          <TextHeader
            sx={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#444',
              marginBottom: '30px',
            }}
          >
            Tìm thấy <span style={{ color: colors.primary }}> {jobSearch.length}</span> việc làm
          </TextHeader>
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
            {jobSearch?.map((job, index) => (
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
                  skills={job.skills}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {isLoadingRec ? (
        <p>Loading...</p>
      ) : (
        <>
          <Slider dataJob={dataRec as IJobDjango[]} />

          <TextHeader>Công ty đang tuyển dụng</TextHeader>
          <SliderCompany />
        </>
      )}

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
          {jobs
            ?.sort((a, b) => 0.5 - Math.random())
            ?.map((job, index) => (
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
