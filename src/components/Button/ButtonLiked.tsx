import { BoxProps } from '@mui/material'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

import { BoxSpaceCenter } from '@/styles'
import { colors } from '@/styles/colors'

interface Props extends BoxProps {}

export const ButtonLiked: React.FC<Props> = ({ sx, ...props }) => {
  return (
    <BoxSpaceCenter
      sx={{
        width: '220px',
        height: '50px',
        padding: '12px 24px',
        border: `1px solid ${colors.primary}`,
        borderRadius: '6px',
        color: colors.primary,
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
      <AiOutlineHeart size={24} style={{ marginRight: '16px' }} />
      Lưu tin
    </BoxSpaceCenter>
  )
}
