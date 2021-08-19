import React, { useState, useMemo } from 'react';
import { useTable } from 'react-table';

var cols = [
  {
    Header: 'Id',
    accessor: 'id'
  },
  {
    Header: 'Bond',
    accessor: 'bond'
  }
]
var testData = [
  {
    id: 1,
    bond: 'test'
  },
  {
    id: 2,
    bond: 'second'
  }
]
function BondTable(props) {
  const columns = useMemo(() => cols, []);
  const data = useMemo(() => testData, []);
  const tableInstance = useTable({
    columns,
    data
  })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = tableInstance
  return (
    <table {...getTableProps()}>
      <thead>
        {
          headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))
              }
            </tr>
          ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {
          rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}

export default BondTable;