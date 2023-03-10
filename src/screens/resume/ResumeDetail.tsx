import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@mui/material'
import { Stack } from '@mui/system'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'

import { IResume } from '@/libs/types'

import { Guide, ProfileInformation, SkillDevelop } from './components'
import { ResumeSchema, ResumeType } from './types'

const ResumeDetail = () => {
  useQuery<IResume>(['my-resume'], {
    onSuccess(data) {
      console.log('data', data)

      setValue('name', data.name)
      setValue('email', data.email)
      setValue('phone_number', data.phone_number)
      setValue('city', data.m_location_id)

      setValue(
        'skills',
        data?.skills.map((item) => item.id),
      )
    },
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ResumeType>({
    resolver: zodResolver(ResumeSchema),
    defaultValues: {
      name: '',
      email: '',
      phone_number: '',

      skills: [],
    },
  })

  console.log('error', errors)

  const onSubmit = (data: ResumeType) => {
    console.log('data', data)
  }

  return (
    <Stack>
      <Guide />
      <ProfileInformation control={control} errors={errors} />
      <SkillDevelop control={control} errors={errors} />

      <Button onClick={handleSubmit(onSubmit)}>Click</Button>
    </Stack>
  )
}

export { ResumeDetail }
