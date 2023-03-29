import { useAtom, useSetAtom } from 'jotai'
import { useAtomCallback } from 'jotai/utils'
import { useCallback } from 'react'

import { loadAuthAtom, tokenAtom, userAtom } from '@/libs/atoms'

import { loginApi, logoutApi, userApi } from '../apis'
import { IUserLoginArgs } from '../types'
export const useAuth = () => {
  const [user, setUser] = useAtom(userAtom)
  const [isFetchAuth, setIsFetchAuth] = useAtom(loadAuthAtom)

  const setToken = useSetAtom(tokenAtom)

  const auth = !!user

  const login = async (args: IUserLoginArgs) => {
    const res = await loginApi(args)
    const { user, ...token } = res.data
    setUser(user)
    setToken(token)
  }

  const logout = async () => {
    await logoutApi()
    setUser(null)
    setToken(null)
    setIsFetchAuth(false)
  }

  const fetchUser = useAtomCallback(
    useCallback(async () => {
      try {
        const token = JSON.parse(localStorage.getItem('user-token') || 'null')
        if (token?.access_token) {
          const res = await userApi()

          setUser(res?.data)
        }
        setIsFetchAuth(false)
      } catch (error) {
        setUser(null)
        setIsFetchAuth(false)
      }
    }, [setUser]),
  )

  return {
    auth,
    login,
    logout,
    fetchUser,
    user,
    isFetchAuth,
  }
}
