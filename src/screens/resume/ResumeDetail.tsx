import { zodResolver } from '@hookform/resolvers/zod'
import { Box } from '@mui/material'
import { Stack } from '@mui/system'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { ButtonSave } from '@/components/Button'
import { request } from '@/libs/request'
import { IResume } from '@/libs/types'
import { formatDate } from '@/libs/utils'

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
      setValue('birthday', new Date(data.birthday))

      setValue('m_location_id', data.m_location_id)
      setValue('m_education_level_id', data.m_education_level_id)
      setValue('m_experience_id', data.m_experience_id)
      setValue('m_working_form_id', data.m_working_form_id)

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
    const value = {
      ...data,
      birthday: formatDate(data.birthday, 'yyyy-MM-dd'),
    }

    try {
      let res
      if (resumeId) {
        res = await request.patch(`/resume/${resumeId}`, value)
      } else {
        res = await request.post('/resume', value)
      }

      console.log('res', res)

      toast.success('Lưu thông tin thành công')
    } catch (err) {
      console.log(err)

      toast.error(err as string)
    }
  }

  return (
    <Stack>
      <Guide />
      <ProfileInformation control={control} errors={errors} />
      <SkillDevelop control={control} errors={errors} />

      <Box sx={{ display: 'flex', justifyContent: 'left' }}>
        <ButtonSave
          onClick={handleSubmit(onSubmit)}
          sx={{ marginTop: '24px', alignSelf: 'flex-end' }}
        />
      </Box>
    </Stack>
  )
}

export { ResumeDetail }
