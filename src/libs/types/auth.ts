import { IUser } from './user'

export interface IUserLoginArgs {
  email: string
  password: string
}

export interface IUserToken {
  access_token: string
  refresh_token: string
  expires_in: number
}

export interface IUserLoginRes extends IUserToken {
  user: IUser
}
