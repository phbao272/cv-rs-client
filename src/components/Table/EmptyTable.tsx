import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import NoDataSvg from '@/assets/svgs/no_data.svg'

const EmptyTable: React.VFC = () => {
  return (
    <Stack justifyContent="center" alignItems="center" spacing={0.5} height="500px">
      <Box component="img" src={NoDataSvg} />
      <Typography variant="body2" color="grey.400">
        Không có dữ liệu
      </Typography>
    </Stack>
  )
}

export { EmptyTable }
