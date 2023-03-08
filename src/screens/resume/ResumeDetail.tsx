import React from 'react'
import { useQuery } from 'react-query'

const ResumeDetail = () => {
  const { data, isLoading } = useQuery(['my-resume'], {
    onSuccess(data) {
      console.log('data', data)
    },
  })

  return <div>ResumeDetail</div>
}

export { ResumeDetail }
