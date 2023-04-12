import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useAtomValue } from 'jotai'
import { useAtomCallback } from 'jotai/utils'
import { useCallback } from 'react'

import { userAtom } from '../atoms'
import { IJobDjango } from '../types'
import { ROLE } from '../utils'

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
      if (!user?.id || user?.role != ROLE['CANDIDATE']) return Promise.resolve([])

      const res = await axios.get(`${baseDjangoURL}/get-recommend?user_id=${user?.id}`)

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
