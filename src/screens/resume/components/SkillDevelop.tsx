import { Grid, Paper } from '@mui/material'
import { Box } from '@mui/system'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form'

import { MultiSelect, OptionType } from '@/components/Input'
import { TextLabelInput } from '@/components/Input'
import { ISkill } from '@/libs/types'

import { ResumeType } from '../types'
import { ContainerInput, TextHeader } from './styled'

interface Props {
  control: Control<ResumeType, object>
  errors: FieldErrors<ResumeType>
}

const SkillDevelop: React.FC<Props> = ({ control }) => {
  const [skillOptions, setSkillOptions] = React.useState<OptionType[]>([])

  useQuery<ISkill[]>(['skill'], {
    onSuccess(data) {
      setSkillOptions(data.map((item) => ({ label: item.name, value: item.id })))
    },
  })

  return (
    <Box
      sx={{
        width: {
          xs: '100%',
          md: '90%',
          lg: '80%',
        },
        marginTop: '30px',
      }}
    >
      <TextHeader>Kỹ năng lập trình</TextHeader>

      <Paper sx={{ padding: '35px 20px' }}>
        <Grid container spacing={4}>
          <Grid item xs={9}>
            <ContainerInput>
              <TextLabelInput label="Liệt kê các kỹ năng" />
              <Controller
                name={`skills`}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <MultiSelect options={skillOptions} onChange={onChange} value={value} />
                )}
              />
            </ContainerInput>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export { SkillDevelop }
