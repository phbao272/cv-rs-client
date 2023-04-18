import Logout from '@mui/icons-material/Logout'
import Settings from '@mui/icons-material/Settings'
import { Badge, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import * as React from 'react'
import { BiBell } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

import AvatarDefault from '@/assets/images/avatar-default.png'
import { useAuth } from '@/libs/hooks'
import { ROLE } from '@/libs/utils/constant'

interface IMenuItem {
  title: string
  onClick: () => void
}

interface IMenuProfile {
  [x: string]: IMenuItem[]
}

export function MenuProfile() {
  const { auth, logout, user } = useAuth()
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = async () => {
    try {
      if (auth) {
        await logout()
        handleClose()
        navigate('/login')
      }
    } catch (error) {
      console.log('err', error)
    }
  }

  const handleGoToResume = () => {
    navigate('/my-resume')
    handleClose()
  }

  const handleGoToJob = () => {
    navigate('/my-job')
    handleClose()
  }

  const menuProfile: IMenuProfile = {
    [ROLE['CANDIDATE']]: [
      {
        title: 'Quản lý CV',
        onClick: handleGoToResume,
      },
      {
        title: 'Việc làm đã ứng tuyển',
        onClick: handleClose,
      },
    ],

    [ROLE['COMPANY']]: [
      {
        title: 'Quản lý công việc',
        onClick: handleGoToJob,
      },
      {
        title: 'Danh sách ứng tuyển',
        onClick: handleClose,
      },
    ],
  }

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Badge badgeContent={4} color="primary">
          <BiBell
            size="24px"
            style={{
              cursor: 'pointer',
            }}
          />
        </Badge>

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar src={AvatarDefault} sx={{ width: 32, height: 32 }} />
          </IconButton>
        </Tooltip>

        <Typography
          sx={{
            color: '#333',
            fontWeight: 'bold',
            fontSize: '14px',
            marginLeft: '4px',
          }}
          variant="body2"
        >
          {user?.name}
        </Typography>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {menuProfile[user?.role as unknown as string]?.map((item, index) => (
          <MenuItem key={index} onClick={item.onClick}>
            {item.title}
          </MenuItem>
        ))}

        <Divider />

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Cài đặt
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Đăng xuất
        </MenuItem>
      </Menu>
    </React.Fragment>
  )
}
