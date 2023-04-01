import { Avatar, Stack, Tooltip } from '@mui/material'
import React from 'react'

import PhotoDefault from '@/assets/images/logo-default.png'
import { BoxAlignCenter, ChipStyled, StyledLink } from '@/styles'
import { TextALine } from '@/styles/styled/text'

interface BoxJobProps {
  job_id: number
  company_id: number
  title: string
  company_name: string
  location: string
  salary: string
  photo?: string
}

const BoxJob: React.FC<BoxJobProps> = ({ job_id, company_id, ...props }) => {
  return (
    <Stack
      sx={{
        padding: '12px 16px',
        border: '1px solid #e9eaec',
        borderRadius: '6px',
      }}
    >
      <BoxAlignCenter sx={{ gap: '12px' }}>
        <Avatar
          variant="square"
          src={props.photo || PhotoDefault}
          sx={{ border: '1px solid #e9eaec', width: '46px', height: '46px', borderRadius: '4px' }}
        />
        <Stack>
          <StyledLink to={`/jobs/${job_id}`}>
            <Tooltip title={props.title} placement="top-start">
              <TextALine
                sx={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  ':hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                {props.title}
              </TextALine>
            </Tooltip>
          </StyledLink>

          <StyledLink to={`/companies/${company_id}`}>
            <Tooltip title={props.company_name} placement="top-start">
              <TextALine
                sx={{
                  fontSize: 14,
                  ':hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                {props.company_name}
              </TextALine>
            </Tooltip>
          </StyledLink>
        </Stack>
      </BoxAlignCenter>

      <BoxAlignCenter sx={{ gap: '12px', marginTop: '12px' }}>
        <ChipStyled label={props.location} size="small" />
        <ChipStyled label={props.salary} size="small" />
      </BoxAlignCenter>
    </Stack>
  )
}

export { BoxJob }
