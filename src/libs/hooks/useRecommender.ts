import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useAtomValue } from 'jotai'
import { useAtomCallback } from 'jotai/utils'
import { useCallback } from 'react'

import { userAtom } from '../atoms'
import { IJobDjango } from '../types'

export const baseDjangoURL = import.meta.env.VITE_BASE_URL_DJANGO_API

export const useRecommender = () => {
  const user = useAtomValue(userAtom)

  const {
    data: dataRec,
    isLoading: isLoadingRec,
    error,
    refetch,
  } = useQuery<IJobDjango[]>(
    ['recommender'],
    async () => {
      if (!user?.resume?.id) return Promise.resolve([])

      const res = await axios.get(`${baseDjangoURL}/get-by-cbf?resume_id=${user?.resume?.id}`)

      return res.data
    },
    {
      enabled: !!user?.resume?.id,
    },
  )

  const fetchRecommender = useAtomCallback(
    useCallback(async () => {
      console.log("refetching recommender's data")

      refetch()
    }, []),
  )

  return { dataRec, isLoadingRec, error, fetchRecommender }
}
