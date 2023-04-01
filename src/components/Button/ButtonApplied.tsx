import { BoxProps } from '@mui/material'
import React from 'react'
import { IoPaperPlaneOutline } from 'react-icons/io5'

import { BoxSpaceCenter } from '@/styles'
import { colors } from '@/styles/colors'

interface Props extends BoxProps {}

export const ButtonApplied: React.FC<Props> = ({ sx, ...props }) => {
  return (
    <BoxSpaceCenter
      sx={{
        width: '220px',
        height: '50px',
        padding: '12px 24px',
        backgroundColor: colors.primary,
        borderRadius: '6px',
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 14,
        fontWeight: 'bold',
        cursor: 'pointer',
        ':hover': {
          opacity: 0.9,
        },
        ...sx,
      }}
      {...props}
    >
      <IoPaperPlaneOutline size={24} style={{ marginRight: '16px' }} />
      Ứng tuyển ngay
    </BoxSpaceCenter>
  )
}
