import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Grid } from '@mui/material'
import { useMutation, useQuery } from '@tanstack/react-query'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { BiSearch } from 'react-icons/bi'

import { request } from '@/libs/request'
import { IBaseMaster, IJob, ISkill } from '@/libs/types'
import { colors } from '@/styles/colors'

import { MultiSelect, OptionType, Select } from '../Input'
import { SearchSchema, SearchType } from './types'

interface Props {
  setJobSearch: React.Dispatch<React.SetStateAction<IJob[]>>
}

export const SearchBox: React.FC<Props> = ({ setJobSearch }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchType>({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      skills: [],
    },
  })

  const [locationOptions, setLocationOptions] = React.useState<OptionType[]>([])
  useQuery<IBaseMaster[]>(['location'], {
    onSuccess(data) {
      setLocationOptions(data.map((item) => ({ label: item.name, value: item.id })))
    },
  })

  const [skillOptions, setSkillOptions] = React.useState<OptionType[]>([])
  useQuery<ISkill[]>(['skill'], {
    onSuccess(data) {
      setSkillOptions(data.map((item) => ({ label: item.name, value: item.id })))
    },
  })

  const mutation = useMutation({
    mutationFn: async (d: any) => {
      const res = await request.post(`search-job`, {
        ...d,
      })

      return res.data
    },
    onSuccess: (data) => {
      console.log('search-job', data)

      setJobSearch(data as IJob[])
    },
  })

  const onSubmit = (data: SearchType) => {
    console.log('SearchType data', data)
    console.log('errors', errors)

    mutation.mutate(data)
  }

  return (
    <Grid
      container
      sx={{ marginTop: '30px', backgroundColor: '#fff', padding: '12px' }}
      spacing={1}
    >
      <Grid item xs={7} sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <BiSearch size={24} />

        <Controller
          name={`skills`}
          control={control}
          render={({ field: { onChange, value } }) => (
            <MultiSelect
              options={skillOptions}
              onChange={onChange}
              value={value || []}
              placeholder="Nhập kỹ năng tìm kiếm"
            />
          )}
        />
      </Grid>

      <Grid item xs={3}>
        <Controller
          name="m_location_id"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Select
              fullWidth
              placeholder="Tất cả địa điểm"
              options={locationOptions}
              onChange={onChange}
              value={value}
            />
          )}
        />
      </Grid>

      <Grid item xs={2}>
        <Button
          variant="contained"
          fullWidth
          sx={{
            height: '100%',
            backgroundColor: colors.primary,
            '&:hover': {
              backgroundColor: colors.primary,
              opacity: 0.9,
            },
          }}
          onClick={handleSubmit(onSubmit)}
        >
          Tìm kiếm
        </Button>
      </Grid>
    </Grid>
  )
}
