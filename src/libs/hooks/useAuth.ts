import { useAtom, useSetAtom } from 'jotai'
import { useAtomCallback } from 'jotai/utils'
import { useCallback } from 'react'

import { tokenAtom, userAtom } from '@/libs/atoms'

import { loginApi, userApi } from '../apis'
import { IUserLoginArgs } from '../types'
export const useAuth = () => {
  const [user, setUser] = useAtom(userAtom)
  const setToken = useSetAtom(tokenAtom)

  const auth = !!user

  const login = async (args: IUserLoginArgs) => {
    const res = await loginApi(args)
    const { user, ...token } = res.data
    setUser(user)
    setToken(token)
  }

  const fetchUser = useAtomCallback(
    useCallback(async () => {
      try {
        const token = JSON.parse(localStorage.getItem('user-token') || 'null')

        console.log('token', token)

        if (token?.access_token) {
          const res = await userApi()

          console.log('res', res.data)

          setUser(res?.data)
        }
      } catch (error) {
        setUser(null)
      }
    }, [setUser]),
  )

  return {
    auth,
    login,
    fetchUser,
  }
}
