import { zodResolver } from '@hookform/resolvers/zod'
import { Paper } from '@mui/material'
import { Box } from '@mui/system'
import { useMutation, useQuery } from '@tanstack/react-query'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

import { ButtonSave } from '@/components/Button'
import {
  DatePicker,
  Input,
  MultiSelect,
  OptionType,
  Select,
  TextLabelInput,
} from '@/components/Input'
import { request } from '@/libs/request'
import { IBaseMaster, IJob, ISkill } from '@/libs/types'
import { formatDate } from '@/libs/utils'
import { TextHeader } from '@/styles'

import { ContainerInput } from '../resume/components'
import { JobSchema, JobType } from './types'

export const JobForm = () => {
  const { job_id } = useParams()
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<JobType>({
    resolver: zodResolver(JobSchema),
    defaultValues: {
      title: '',
      description: '',
      deadline: new Date(),
      skills: [],
    },
  })

  console.log('errors', errors)

  const [locationOptions, setLocationOptions] = React.useState<OptionType[]>([])
  const [educationOptions, setEducationOptions] = React.useState<OptionType[]>([])
  const [experienceOptions, setExperienceOptions] = React.useState<OptionType[]>([])
  const [workingFormOptions, setWorkingFormOptions] = React.useState<OptionType[]>([])
  const [salaryOptions, setSalaryOptions] = React.useState<OptionType[]>([])

  useQuery<IBaseMaster[]>(['location'], {
    onSuccess(data) {
      setLocationOptions(data.map((item) => ({ label: item.name, value: item.id })))
    },
  })

  useQuery<IBaseMaster[]>(['education-level'], {
    onSuccess(data) {
      setEducationOptions(data.map((item) => ({ label: item.name, value: item.id })))
    },
  })

  useQuery<IBaseMaster[]>(['experience'], {
    onSuccess(data) {
      setExperienceOptions(data.map((item) => ({ label: item.name, value: item.id })))
    },
  })

  useQuery<IBaseMaster[]>(['working-form'], {
    onSuccess(data) {
      setWorkingFormOptions(data.map((item) => ({ label: item.name, value: item.id })))
    },
  })

  useQuery<IBaseMaster[]>(['salary'], {
    onSuccess(data) {
      setSalaryOptions(data.map((item) => ({ label: item.name, value: item.id })))
    },
  })

  const [skillOptions, setSkillOptions] = React.useState<OptionType[]>([])
  useQuery<ISkill[]>(['skill'], {
    onSuccess(data) {
      setSkillOptions(data.map((item) => ({ label: item.name, value: item.id })))
    },
  })

  const { isLoading: isLoadingJob } = useQuery<IJob>([`get-job/${job_id}`], {
    onSuccess: (data) => {
      console.log(data)

      setValue('title', data.title)
      setValue('description', data.description)
      setValue('deadline', new Date(data.deadline))
      setValue('number_of_recruit', '' + data.number_of_recruit)
      setValue('active', data.active)
      setValue(
        'skills',
        data?.skills.map((item) => item.id),
      )

      setValue('m_location_id', data.m_location_id)
      setValue('m_education_level_id', data.m_education_level_id)
      setValue('m_experience_id', data.m_experience_id)
      setValue('m_working_form_id', data.m_working_form_id)
      setValue('m_salary_id', data.m_salary_id)
    },
    enabled: !!job_id,
  })

  const mutation = useMutation({
    mutationFn: async (data: JobType) => {
      const value = {
        ...data,
        deadline: formatDate(data.deadline, 'yyyy-MM-dd'),
      }

      try {
        let res
        if (job_id) {
          res = await request.patch(`/job/${job_id}`, value)
        } else {
          res = await request.post('/job', value)
        }

        console.log('res', res)
      } catch (err) {
        console.log(err)
      }
    },
    onSuccess: () => {
      navigate('/my-job')
    },
  })

  const onSubmit = async (data: JobType) => {
    mutation.mutate(data)
  }

  return isLoadingJob && job_id ? (
    <p>Loading...</p>
  ) : (
    <>
      <Box
        sx={{
          width: {
            xs: '100%',
            md: '90%',
            lg: '80%',
          },
        }}
      >
        <TextHeader>{job_id ? 'Chỉnh sửa công việc' : 'Tạo mới công việc'}</TextHeader>

        <Paper sx={{ padding: '35px 20px' }}>
          <ContainerInput>
            <TextLabelInput style={{ width: '200px' }} label={'Tên công việc'} />
            <Controller
              name="title"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  required
                  fullWidth
                  error={!!errors?.title?.message}
                  helperText={errors?.title?.message}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </ContainerInput>

          <ContainerInput>
            <TextLabelInput style={{ width: '200px' }} label={'Mô tả công viêc'} />
            <Controller
              name="description"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  required
                  fullWidth
                  error={!!errors?.description?.message}
                  helperText={errors?.description?.message}
                  onChange={onChange}
                  value={value}
                  multiline
                  rows={5}
                />
              )}
            />
          </ContainerInput>

          <ContainerInput>
            <TextLabelInput style={{ width: '200px' }} label={'Số lượng tuyển'} />

            <Controller
              name="number_of_recruit"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  required
                  fullWidth
                  error={!!errors?.number_of_recruit?.message}
                  helperText={errors?.number_of_recruit?.message}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </ContainerInput>

          <ContainerInput>
            <TextLabelInput style={{ width: '200px' }} label="Liệt kê các kỹ năng" />
            <Controller
              name={`skills`}
              control={control}
              render={({ field: { onChange, value } }) => (
                <MultiSelect options={skillOptions} onChange={onChange} value={value} />
              )}
            />
          </ContainerInput>

          <ContainerInput>
            <TextLabelInput style={{ width: '200px' }} label={'Thành phố'} />
            <Controller
              name="m_location_id"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select fullWidth options={locationOptions} onChange={onChange} value={value} />
              )}
            />
          </ContainerInput>

          <ContainerInput>
            <TextLabelInput style={{ width: '200px' }} label={'Trình độ học vấn'} />
            <Controller
              name="m_education_level_id"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select fullWidth options={educationOptions} onChange={onChange} value={value} />
              )}
            />
          </ContainerInput>

          <ContainerInput>
            <TextLabelInput style={{ width: '200px' }} label={'Số năm kinh nghiệm'} />
            <Controller
              name="m_experience_id"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select fullWidth options={experienceOptions} onChange={onChange} value={value} />
              )}
            />
          </ContainerInput>

          <ContainerInput>
            <TextLabelInput style={{ width: '200px' }} label={'Hình thức làm việc'} />
            <Controller
              name="m_working_form_id"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select fullWidth options={workingFormOptions} onChange={onChange} value={value} />
              )}
            />
          </ContainerInput>

          <ContainerInput>
            <TextLabelInput style={{ width: '200px' }} label={'Mức lương'} />
            <Controller
              name="m_salary_id"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select fullWidth options={salaryOptions} onChange={onChange} value={value} />
              )}
            />
          </ContainerInput>

          <ContainerInput>
            <TextLabelInput style={{ width: '200px' }} label={'Trạng thái'} />
            <Controller
              name="active"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  fullWidth
                  options={[
                    { label: 'Đang tuyển', value: 1 },
                    { label: 'Đã hết hạn', value: 0 },
                  ]}
                  onChange={onChange}
                  value={value}
                />
              )}
            />
          </ContainerInput>

          <ContainerInput>
            <TextLabelInput style={{ width: '200px' }} label={'Hạn nộp hồ sơ'} />
            <Box style={{ flex: 1 }}>
              <Controller
                name="deadline"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    required
                    fullWidth
                    error={!!errors?.deadline?.message}
                    helperText={errors?.deadline?.message}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Box>
          </ContainerInput>
        </Paper>

        <Box sx={{ display: 'flex', justifyContent: 'right' }}>
          <ButtonSave
            onClick={handleSubmit(onSubmit)}
            sx={{ marginTop: '24px', alignSelf: 'flex-end' }}
          />
        </Box>
      </Box>
    </>
  )
}
