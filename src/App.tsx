import React, { Suspense } from 'react'
import { Router } from '@/routers'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toast'
import { CssBaseline, ThemeProvider } from '@mui/material'

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
