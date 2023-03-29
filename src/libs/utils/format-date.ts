import { format } from 'date-fns'

export const formatDate = (date: Date, formatString = 'dd-MM-yyyy') => {
  return format(date, formatString)
}
