import { Button, styled, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

import { BoxAlignCenter } from '@/styles'
import { colors } from '@/styles/colors'
import { StyledLink } from '@/styles/styled/misc'

export const Header = () => {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <BoxAlignCenter>
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          B-CV
        </Typography>

        <Stack direction="row" sx={{ marginLeft: '40px', gap: '20px' }}>
          <NavbarItem>Việc làm</NavbarItem>
          <NavbarItem>Hồ sơ & CV</NavbarItem>
          <NavbarItem>Công ty</NavbarItem>
        </Stack>
      </BoxAlignCenter>

      <BoxAlignCenter sx={{ gap: '20px' }}>
        <StyledLink to="/login">
          <Button variant="outlined">Đăng nhập</Button>
        </StyledLink>
        <StyledLink to="/sign-up">
          <Button variant="contained">Đăng ký</Button>
        </StyledLink>
      </BoxAlignCenter>
    </Stack>
  )
}

const NavbarItem = styled(Typography)({
  cursor: 'pointer',
  color: '#333',
  fontSize: '15px',
  fontWeight: 700,
  padding: '13px 10px',

  '&:hover': {
    color: colors.primary,
  },
})
