import { CssBaseline } from '@mui/material'
import React, { Suspense } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toast'

import { Router } from '@/routers'

const queryClient = new QueryClient()

const App = () => {
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
