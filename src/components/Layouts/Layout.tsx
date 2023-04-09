import { Container } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

import { Footer } from './Footer'
import { Header } from './Header'
export const Layout = () => {
  return (
    <div style={{ backgroundColor: '#f2f2f2' }}>
      <Header />
      <Container maxWidth="lg" sx={{ minHeight: '100vh', marginTop: '86px' }}>
        <Outlet />
      </Container>
      <Footer />
    </div>
  )
}
