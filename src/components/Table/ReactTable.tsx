import { Box } from '@mui/material'
import {
  flexRender,
  getCoreRowModel,
  Row as RowProps,
  TableOptions,
  useReactTable,
} from '@tanstack/react-table'
import React from 'react'
import styled from 'styled-components'

import { ButtonAdd } from '../Button/ButtonAdd'
import { TableSkeleton } from '../Skeleton'
import { EmptyTable } from './EmptyTable'

interface TableProperties<T extends object> extends TableOptions<T> {
  isSuccess?: boolean
  isLoading?: boolean
  onRowClick?(row: RowProps<T>): void
}

const Styles = styled.div`
  display: block;
  width: 100%;
  max-width: 1200px;

  /* This will make the table scrollable when it gets too small */
  .tableWrap {
    display: block;
    max-width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    border-bottom: 1px solid #eff2f5;
  }
  .tableWrap::-webkit-scrollbar {
    height: 5px;
    background-color: #f5f5f5;
  }
  .tableWrap::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }
  .tableWrap::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #555;
  }

  table {
    /* Make sure the inner table is always as wide as needed */
    width: 100%;
    border-spacing: 0;

    tr {
      color: #000;
      font-size: 16px;
      :last-child {
        td {
          border-bottom: 0;
        }
      }
      &:hover {
        cursor: pointer;
        background-color: rgb(248, 250, 253);
      }
    }
    th,
    td {
      :first-child {
        // width: 4%;
      }
      text-align: left;
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid rgba(196, 196, 196, 0.56);
      font-weight: 600;
      /* The secret sauce */
      /* Each cell should grow equally */
      width: 1%;
      /* But "collapsed" cells should be as small as possible */
      &.collapse {
        width: 0.0000000001%;
      }
    }
  }
  .pagination {
    padding: 0.5rem;
  }
`

function ReactTable<T extends object>(props: Omit<TableProperties<T>, 'getCoreRowModel'>) {
  const { columns, data, isLoading, onRowClick } = props

  const hasRowClick = typeof onRowClick === 'function'

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return isLoading ? (
    <TableSkeleton />
  ) : data?.length === 0 ? (
    <EmptyTable />
  ) : (
    <Box>
      <ButtonAdd sx={{ marginBottom: '24px' }} />

      <Styles>
        <table>
          <thead style={{ backgroundColor: '#efefef' }}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} style={{ padding: '20px' }}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} onClick={() => hasRowClick && onRowClick(row)}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.footer, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </Styles>
    </Box>
  )
}

export { ReactTable }
