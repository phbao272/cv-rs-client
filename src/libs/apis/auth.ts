import { IUser, IUserLoginArgs, IUserLoginRes } from '@/libs/types'

import { request } from '../request'

export const loginApi = (args: IUserLoginArgs) => request.post<IUserLoginRes>('login', args)

export const userApi = () => request.get<IUser>('me')
