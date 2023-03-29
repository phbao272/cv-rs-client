import { z } from 'zod'

export const ResumeSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1),
  phone_number: z.string().min(1),
  birthday: z.date(),

  m_location_id: z.number(),
  m_education_level_id: z.number(),
  m_experience_id: z.number(),
  m_working_form_id: z.number(),

  skills: z.array(z.number()),
})

export type ResumeType = z.infer<typeof ResumeSchema>
