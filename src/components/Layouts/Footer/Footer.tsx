import { Stack, Typography } from '@mui/material'
import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'
import { ImLocation } from 'react-icons/im'

import { BoxAlignCenter, Logo } from '@/styles'

export const Footer = () => {
  return (
    <Stack sx={{ padding: '24px 84px' }}>
      <BoxAlignCenter>
        <Logo>B-CV</Logo>
        <Typography sx={{ fontSize: '14px', marginLeft: '12px', color: '#656d76' }}>
          © 2023 by B-CV. Proudly created with B-CV
        </Typography>
      </BoxAlignCenter>
      <BoxAlignCenter sx={{ marginTop: '4px' }}>
        <ImLocation />
        <Typography sx={{ fontSize: '14px', marginLeft: '12px', color: '#656d76' }}>
          144 Xuân Thủy, P. Dịch Vọng Hậu, Q. Cầu Giấy, Tp. Hà Nội.
        </Typography>
      </BoxAlignCenter>
      <BoxAlignCenter sx={{ marginTop: '4px' }}>
        <BsFillTelephoneFill />
        <Typography sx={{ fontSize: '14px', marginLeft: '12px', color: '#656d76' }}>
          0335461127
        </Typography>
      </BoxAlignCenter>
      <BoxAlignCenter sx={{ marginTop: '4px' }}>
        <FiMail />
        <Typography sx={{ fontSize: '14px', marginLeft: '12px', color: '#656d76' }}>
          pqbao27@gmail.com
        </Typography>
      </BoxAlignCenter>
    </Stack>
  )
}
