import { Grid } from '@mui/material'
import { useQuery } from '@tanstack/react-query'

import { ICompany } from '@/libs/types/company'
import { BoxAlignCenterVertical, TextHeader } from '@/styles'

import { CardCompany } from './components'

export const ListCompany = () => {
  const { isLoading, data } = useQuery<ICompany[]>(['company'], {
    onSuccess: (data) => {
      console.log(data)
    },
  })

  console.log(isLoading)

  return (
    <BoxAlignCenterVertical>
      <TextHeader>Danh sách công ty</TextHeader>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Grid container spacing={2}>
          {data?.length &&
            data?.map((company, index) => (
              <Grid item sm={4} xs={6} key={index}>
                <CardCompany {...company} />
              </Grid>
            ))}
        </Grid>
      )}
    </BoxAlignCenterVertical>
  )
}
