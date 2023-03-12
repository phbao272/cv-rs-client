import { ISkill } from './master'

export interface IResume {
  id: number
  name: string
  email: string
  phone_number: string

  m_location_id: number

  skills: ISkill[]
}
