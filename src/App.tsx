import { CssBaseline } from '@mui/material'
import { QueryClientProvider } from '@tanstack/react-query'
import React, { Suspense, useEffect } from 'react'
import { ToastContainer } from 'react-toast'

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
        <Suspense fallback="Loading...">
          <ToastContainer />
          <Router />
        </Suspense>
      </QueryClientProvider>
    </>
  )
}

export default App
