import { z } from 'zod'

export const SearchSchema = z.object({
  m_location_id: z.number().optional(),

  skills: z.array(z.number()).optional(),
})

export type SearchType = z.infer<typeof SearchSchema>
