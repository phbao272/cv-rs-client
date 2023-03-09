import { Stack } from '@mui/system'
import React from 'react'
import { useQuery } from 'react-query'

import { Guide, ProfileInformation, SkillDevelop } from './components'

const ResumeDetail = () => {
  const { data, isLoading } = useQuery(['my-resume'], {
    onSuccess(data) {
      console.log('data', data)
    },
  })

  return (
    <Stack>
      <Guide />
      <ProfileInformation />
      <SkillDevelop />
    </Stack>
  )
}

export { ResumeDetail }
