import { Avatar, Stack } from '@mui/material'
import React from 'react'

import { BoxAlignCenter, ChipStyled } from '@/styles'
import { TextALine } from '@/styles/styled/text'
interface BoxJobProps {
  title: string
  company: string
  location: string
  salary: string
}

const BoxJob: React.FC<BoxJobProps> = ({ ...props }) => {
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
          src="https://www.topcv.vn/v4/image/topcv-logo-company-default.png"
        />
        <Stack>
          <TextALine>{props.title}</TextALine>
          <TextALine>{props.company}</TextALine>
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
