import { Grid, Paper, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

import { ContainerInput, TextHeader } from './styled'
import { TextLabelInput } from './TextLabelInput'

const SkillDevelop = () => {
  return (
    <Box
      sx={{
        width: {
          xs: '100%',
          md: '90%',
          lg: '80%',
        },
      }}
    >
      <TextHeader>Kỹ năng lập trình</TextHeader>

      <Paper sx={{ padding: '35px 20px' }}>
        <Grid container spacing={4}>
          <Grid item xs={9}>
            <ContainerInput>
              <TextLabelInput label={'Họ và tên'} />
              <TextField required fullWidth />
            </ContainerInput>

            <ContainerInput>
              <TextLabelInput label={'Email'} />
              <TextField required fullWidth />
            </ContainerInput>

            <ContainerInput>
              <TextLabelInput label={'Điện thoại'} />
              <TextField required fullWidth />
            </ContainerInput>
          </Grid>

          <Grid item xs={3}>
            <Box sx={{ height: '200px', backgroundColor: 'gray' }}>Anh dai dien</Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export { SkillDevelop }
