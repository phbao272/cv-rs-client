import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

import { IUserToken } from '../types'

export const userAtom = atom<any | null>(null)
export const tokenAtom = atomWithStorage<IUserToken | null>('user-token', null)
