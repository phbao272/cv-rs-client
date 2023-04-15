import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import { TextEllipsis } from '@/components/Text'
import { IJobDjango } from '@/libs/types'
import { StyledLink } from '@/styles'
import { colors } from '@/styles/colors'

interface Props {
  jobs: IJobDjango[]
}

export const HotJob: React.FC<Props> = ({ jobs }) => {
  return (
    <Box sx={{ paddingBottom: '30px' }}>
      {jobs.map((job, index) => (
        <React.Fragment key={index}>
          <HotJobItem
            job_id={job.id}
            company_name={job.company.name}
            job_name={job.title}
            salary={job.salary.name}
          />
        </React.Fragment>
      ))}
    </Box>
  )
}

interface HotJobItemProps {
  job_id: number
  company_name: string
  job_name: string
  salary: string
}

export const HotJobItem: React.FC<HotJobItemProps> = ({
  job_id,
  company_name,
  job_name,
  salary,
}) => {
  return (
    <Stack
      sx={{
        border: '1px solid #e9eaec',
        flexGrow: 1,
        alignItems: 'flex-start',
        padding: '8px 12px',
      }}
    >
      <TextEllipsis
        sx={{ fontSize: '12px', color: '#999', fontWeight: 'bold', textAlign: 'left' }}
        lineClamp={1}
      >
        {company_name}
      </TextEllipsis>

      <StyledLink to={`/jobs/${job_id}`}>
        <TextEllipsis
          sx={{
            color: '#444444',
            fontWeight: 'bold',
            fontSize: 14,
            textAlign: 'left',
          }}
          lineClamp={1}
        >
          {job_name}
        </TextEllipsis>
      </StyledLink>
      <Typography
        sx={{
          color: colors.primary,
          fontSize: 14,
        }}
      >
        {salary}
      </Typography>
    </Stack>
  )
}
