import { ICompany } from './company'
import { IBaseMaster, ISkill } from './master'

export interface IJob {
  id: number
  title: string
  description: string
  number_of_recruit: string
  deadline: string
  active: number
  company_id: number
  m_working_form_id: number
  m_location_id: number
  m_education_level_id: number
  m_experience_id: number
  m_salary_id: number

  company: ICompany
  location: IBaseMaster
  salary: IBaseMaster
  experience: IBaseMaster
  education_level: IBaseMaster
  working_form: IBaseMaster
  skills: ISkill[]
}

export interface IInteractionJob {
  id: number
  number_of_click: number
  applied: number
  liked: number
  rating: number
  job_id: number
  user_id: number
}
