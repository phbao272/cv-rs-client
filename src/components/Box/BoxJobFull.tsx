import { Avatar, Stack } from '@mui/material'
import React from 'react'

import PhotoDefault from '@/assets/images/logo-default.png'
import { TextEllipsis } from '@/components/Text'
import { ISkillDjango } from '@/libs/types'
import { BoxAlignCenter, ChipStyled, StyledLink } from '@/styles'

interface BoxJobFullProps {
  job_id: number
  company_id: number
  title: string
  company_name: string
  location: string
  salary: string
  photo?: string
  description?: string
  skills: ISkillDjango[]
}

const BoxJobFull: React.FC<BoxJobFullProps> = ({ job_id, description, ...props }) => {
  return (
    <Stack
      direction="row"
      sx={{
        padding: '12px 16px',
        border: '1px solid #e9eaec',
        borderRadius: '6px',
        gap: '12px',
      }}
    >
      <Avatar
        variant="square"
        src={props.photo || PhotoDefault}
        sx={{
          border: '1px solid #e9eaec',
          width: '120px',
          height: '120px',
          borderRadius: '4px',
          '& .MuiAvatar-img': { objectFit: 'contain' },
        }}
      />
      <Stack>
        <StyledLink to={`/jobs/${job_id}`}>
          <TextEllipsis
            sx={{
              color: '#d34127',
              fontWeight: 'bold',
              fontSize: 15,
            }}
            lineClamp={1}
          >
            {props.title}
          </TextEllipsis>
        </StyledLink>

        <TextEllipsis
          sx={{
            fontSize: 15,
            color: '#939393',
          }}
        >
          {props.company_name}
        </TextEllipsis>

        <TextEllipsis
          sx={{
            fontSize: 14,
            marginTop: '4px',
          }}
          lineClamp={3}
        >
          {description}
        </TextEllipsis>

        <BoxAlignCenter sx={{ gap: '12px', marginTop: '12px', flexWrap: 'wrap' }}>
          <ChipStyled label={props.location} size="small" />
          <ChipStyled label={props.salary} size="small" />
          {props.skills.map((skill, index) => (
            <ChipStyled key={index} label={skill.m_skill__name} size="small" />
          ))}
        </BoxAlignCenter>
      </Stack>
    </Stack>
  )
}

export { BoxJobFull }
