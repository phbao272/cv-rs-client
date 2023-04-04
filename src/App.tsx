import 'react-toastify/dist/ReactToastify.css'

import { CssBaseline } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { QueryClientProvider } from '@tanstack/react-query'
import React, { Suspense, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

import { queryClient } from '@/libs/react-query'
import { Router } from '@/routers'

import { useAuth } from './libs/hooks'
const App = () => {
  const { fetchUser } = useAuth()

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Suspense fallback="Loading...">
            <ToastContainer />
            <Router />
          </Suspense>
        </LocalizationProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
