import { z } from 'zod'

export const ResumeSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1),
  phone_number: z.string().min(1),

  city: z.number(),

  skills: z.array(z.number()),
})

export type ResumeType = z.infer<typeof ResumeSchema>
