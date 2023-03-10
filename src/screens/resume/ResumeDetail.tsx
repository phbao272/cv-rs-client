import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@mui/material'
import { Stack } from '@mui/system'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'

import { request } from '@/libs/request'
import { IResume } from '@/libs/types'

import { Guide, ProfileInformation, SkillDevelop } from './components'
import { ResumeSchema, ResumeType } from './types'

const ResumeDetail = () => {
  const [resumeId, setResumeId] = React.useState<number | null>(null)

  useQuery<IResume>(['my-resume'], {
    onSuccess(data) {
      console.log('data', data)
      if (data.id) {
        setResumeId(data.id)
      }

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

  const onSubmit = async (data: ResumeType) => {
    console.log('data', data)
    const value = { ...data, m_location_id: data.city }

    try {
      let res
      if (resumeId) {
        res = await request.patch(`/resume/${resumeId}`, value)
      } else {
        res = await request.post('/resume', value)
      }

      console.log('res', res)
    } catch (err) {
      console.log(err)
    }
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
