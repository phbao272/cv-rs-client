import { Box, Button, Container, styled, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

import { useAuth } from '@/libs/hooks'
import { BoxAlignCenter } from '@/styles'
import { colors } from '@/styles/colors'
import { StyledLink } from '@/styles/styled/misc'

import { MenuProfile } from './MenuProfile'

export const Header = () => {
  const { auth } = useAuth()

  return (
    <Box sx={{ backgroundColor: '#fff' }}>
      <Container maxWidth="xl">
        <Stack
          direction="row"
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
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

          {auth ? (
            <MenuProfile />
          ) : (
            <BoxAlignCenter sx={{ gap: '20px' }}>
              <StyledLink to="/login">
                <Button variant="outlined">Đăng nhập</Button>
              </StyledLink>
              <StyledLink to="/sign-up">
                <Button variant="contained">Đăng ký</Button>
              </StyledLink>
            </BoxAlignCenter>
          )}
        </Stack>
      </Container>
    </Box>
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
