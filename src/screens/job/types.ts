import { z } from 'zod'

export const JobSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  number_of_recruit: z.string().min(1),
  deadline: z.date(),
  active: z.number().min(1),

  m_location_id: z.number(),
  m_education_level_id: z.number(),
  m_experience_id: z.number(),
  m_working_form_id: z.number(),
  m_salary_id: z.number(),

  skills: z.array(z.number()),
})

export type JobType = z.infer<typeof JobSchema>
