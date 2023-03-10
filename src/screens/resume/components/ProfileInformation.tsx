import { Grid, Paper, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Control, Controller, FieldErrors } from 'react-hook-form'

import { Input, OptionType, Select } from '@/components/Input'
import { IBaseMaster } from '@/libs/types'

import { ResumeType } from '../types'
import { ContainerInput, TextHeader } from './styled'
import { TextLabelInput } from './TextLabelInput'

interface Props {
  control: Control<ResumeType, object>
  errors: FieldErrors<ResumeType>
}

const ProfileInformation: React.FC<Props> = ({ control, errors }) => {
  const [locationOptions, setLocationOptions] = React.useState<OptionType[]>([])

  useQuery<IBaseMaster[]>(['location'], {
    onSuccess(data) {
      setLocationOptions(data.map((item) => ({ label: item.name, value: item.id })))
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
      }}
    >
      <TextHeader>Thông tin cá nhân</TextHeader>

      <Paper sx={{ padding: '35px 20px' }}>
        <Grid container spacing={4}>
          <Grid item xs={9}>
            <ContainerInput>
              <TextLabelInput label={'Họ và tên'} />
              <Controller
                name="name"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Input
                    required
                    fullWidth
                    error={!!errors?.name?.message}
                    helperText={errors?.name?.message}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </ContainerInput>

            <ContainerInput>
              <TextLabelInput label={'Email'} />
              <Controller
                name="email"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    required
                    fullWidth
                    error={!!errors?.email?.message}
                    helperText={errors?.email?.message}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </ContainerInput>

            <ContainerInput>
              <TextLabelInput label={'Điện thoại'} />
              <Controller
                name="phone_number"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <TextField
                    required
                    fullWidth
                    error={!!errors?.phone_number?.message}
                    helperText={errors?.phone_number?.message}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </ContainerInput>

            <ContainerInput>
              <TextLabelInput label={'Thành phố'} />
              <Controller
                name="city"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select fullWidth options={locationOptions} onChange={onChange} value={value} />
                )}
              />
            </ContainerInput>
          </Grid>

          <Grid item xs={3}>
            <Box sx={{ height: '200px', backgroundColor: 'gray' }}>Anh dai dien</Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export { ProfileInformation }
