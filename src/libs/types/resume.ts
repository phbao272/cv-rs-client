import { ISkill } from './master'

export interface IResume {
  id: number
  name: string
  email: string
  birthday: string
  phone_number: string

  avatar?: string

  m_location_id: number
  m_education_level_id: number
  m_experience_id: number
  m_working_form_id: number

  skills: ISkill[]
}
