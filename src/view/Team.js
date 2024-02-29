import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import data from "../datagroup/team.json"

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'email', headerName: 'Email Address', width: 230 },
  { field: 'phone', headerName: 'Phone', width: 130 },
  { field: 'age', headerName: 'Age', type: 'number', align: "left", headerAlign: "left" },
  {
    field: 'access',
    headerName: 'access',
    description: 'This column has a value getter and is not sortable.',
    renderCell: ({ row: { access } }) => {
      return (
        <div>
          {access}
        </div>
      )
    }
  },
];

const rows = data

const Team = () => {
  return (
    <main className='p-4 overflow-x-hidden team'>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </main>
  )
}

export default Team