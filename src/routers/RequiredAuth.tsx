import React from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth } from '@/libs/hooks'

interface IRequiredAuthProps {
  children: any
}

const RequiredAuth = ({ children }: IRequiredAuthProps) => {
  const { auth } = useAuth()

  if (!auth) {
    return <Navigate to="/login" />
  }

  return children
}

export { RequiredAuth }
