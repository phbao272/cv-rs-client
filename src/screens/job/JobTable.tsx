import { useQuery } from '@tanstack/react-query'
import { createColumnHelper, Row } from '@tanstack/react-table'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ReactTable } from '@/components/Table'
import { IJob } from '@/libs/types'
import { STATUS_JOB } from '@/libs/utils'
import { BoxAlignCenterVertical } from '@/styles'

import { TextHeader } from '../resume/components'

type JobType = {
  id: number
  job_name: string
  number_of_recruit: string
  working_form: string
  deadline: string
  active: string
  experience: string
}

const columnHelper = createColumnHelper<JobType>()

const columns = [
  columnHelper.accessor('job_name', {
    header: 'Tên công việc',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('number_of_recruit', {
    header: 'Số lượng tuyển',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('experience', {
    header: 'Kinh nghiệm',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('working_form', {
    header: 'Hình thức làm việc',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('deadline', {
    header: 'Hạn nộp hồ sơ',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('active', {
    header: 'Trạng thái',
    cell: (info) => <span>{STATUS_JOB[info.getValue() as unknown as number]}</span>,
  }),
]

export const JobTable = () => {
  const navigate = useNavigate()

  const [data, setData] = useState<JobType[]>()

  const { isLoading } = useQuery<IJob[]>(['my-job'], {
    onSuccess(data) {
      console.log(data)

      setData(
        data?.map((item) => ({
          id: item.id,
          job_name: item?.title,
          number_of_recruit: item?.number_of_recruit,
          working_form: item?.working_form?.name,
          deadline: item.deadline,
          active: item.active as unknown as string,
          experience: item?.experience?.name,
        })),
      )
    },
  })

  const handleOnRowClick = (row: Row<JobType>) => {
    console.log(row)

    navigate(`edit/${row.original.id}`)
  }

  return (
    <BoxAlignCenterVertical sx={{ padding: '20px', marginTop: '24px', backgroundColor: '#fff' }}>
      <TextHeader>Danh sách việc làm</TextHeader>
      <ReactTable
        data={(data || []) as unknown as JobType[]}
        columns={columns}
        isLoading={isLoading}
        onRowClick={handleOnRowClick}
      />
    </BoxAlignCenterVertical>
  )
}
