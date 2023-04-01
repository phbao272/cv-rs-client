import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Layout } from '@/components/Layouts'
import { FullScreenLoading } from '@/components/Loader'
import { useAuth } from '@/libs/hooks'
import { ROLE } from '@/libs/utils/constant'
import { Home, NotFound } from '@/screens'
import { Login } from '@/screens/auth'
import { ListCompany } from '@/screens/company'
import { Forbidden } from '@/screens/forbidden'
import { JobDetail, JobForm, JobTable } from '@/screens/job'
import { ResumeDetail } from '@/screens/resume'

import { RequiredAuth } from './RequiredAuth'

interface IRoute {
  path: string
  element: React.ReactNode
  permissions: number[]
  requiredAuth?: boolean
}

const resumeRouters: IRoute[] = [
  {
    path: '/my-resume',
    element: <ResumeDetail />,
    permissions: [ROLE['CANDIDATE']],
    requiredAuth: true,
  },
]

const jobRouters: IRoute[] = [
  {
    path: '/my-job',
    element: <JobTable />,
    permissions: [ROLE['COMPANY']],
    requiredAuth: true,
  },
  {
    path: '/my-job/new',
    element: <JobForm />,
    permissions: [ROLE['COMPANY']],
    requiredAuth: true,
  },
  {
    path: '/my-job/edit/:job_id',
    element: <JobForm />,
    permissions: [ROLE['COMPANY']],
    requiredAuth: true,
  },
]

export const routers: IRoute[] = [
  {
    path: '/',
    element: <Home />,
    permissions: [],
  },
  {
    path: '/news',
    element: <div>news</div>,
    permissions: [],
    requiredAuth: true,
  },
  {
    path: '/companies',
    element: <ListCompany />,
    permissions: [],
  },
  {
    path: '/jobs/:job_id',
    element: <JobDetail />,
    permissions: [],
  },
  ...resumeRouters,
  ...jobRouters,
]

export const Router = () => {
  const { user, isFetchAuth } = useAuth()

  if (isFetchAuth) {
    return <FullScreenLoading />
  }

  const checkHasPermission = (permissions: number[]) => {
    if (!permissions || !permissions.length) return false

    const hasPermission = permissions.some((permission) => {
      return permission == user?.role
    })

    return hasPermission
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Layout />}>
        {routers.map((route, index) => {
          if (!route.permissions || !route.permissions.length) {
            if (route.requiredAuth) {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<RequiredAuth>{route.element}</RequiredAuth>}
                />
              )
            }

            return <Route key={index} path={route.path} element={route.element} />
          }

          if (checkHasPermission(route.permissions)) {
            if (route.requiredAuth) {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<RequiredAuth>{route.element}</RequiredAuth>}
                />
              )
            }
            return <Route key={index} path={route.path} element={route.element} />
          } else {
            if (route.requiredAuth) {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={<RequiredAuth>{<Forbidden />}</RequiredAuth>}
                />
              )
            }
            return <Route key={index} path={route.path} element={<Forbidden />} />
          }
        })}
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
