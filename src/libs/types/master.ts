export interface IBaseMaster {
  id: number
  name: string
}

export interface ISkill extends IBaseMaster {}

export interface ISkillDjango {
  m_skill__id: number
  m_skill__name: string
}
