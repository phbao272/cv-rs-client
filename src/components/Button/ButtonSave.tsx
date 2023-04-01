import { BoxProps } from '@mui/material'
import React from 'react'
import { AiFillSave } from 'react-icons/ai'

import { BoxSpaceCenter } from '@/styles'
import { colors } from '@/styles/colors'

interface Props extends BoxProps {}

export const ButtonSave: React.FC<Props> = ({ sx, ...props }) => {
  return (
    <BoxSpaceCenter
      sx={{
        width: '160px',
        height: '50px',
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
      <AiFillSave size={24} style={{ marginRight: '16px' }} />
      Lưu
    </BoxSpaceCenter>
  )
}
