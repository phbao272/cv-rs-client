import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

import { IUser, IUserToken } from '../types'

export const userAtom = atom<IUser | null>(null)
export const tokenAtom = atomWithStorage<IUserToken | null>('user-token', null)

export const loadAuthAtom = atom<boolean>(true)
