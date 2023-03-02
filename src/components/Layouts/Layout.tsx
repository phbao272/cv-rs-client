import { Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

import { Footer } from './Footer'
import { Header } from './Header'
export const Layout = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
      <Footer />
    </div>
  )
}
