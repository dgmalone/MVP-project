import React, { useState, useMemo } from 'react';
import { useTable } from 'react-table';

var cols = [
  {
    Header: 'Number',
    accessor: 'cdiac_number'
  },
  {
    Header: 'Issuer',
    accessor: 'issuer'
  },
  {
    Header: 'Issuer Type',
    accessor: 'issuer_type'
  },
  {
    Header: 'Sale Date',
    accessor: 'sale_date'
  },
  {
    Header: 'Sale Type',
    accessor: 'sale_type_comp_neg'
  },
  {
    Header: 'Principal Amount',
    accessor: 'principal_amount'
  },
  {
    Header: 'Refunding Amount',
    accessor: 'refunding_amount'
  },
  {
    Header: 'Debt Type',
    accessor: 'debt_type'
  },
  {
    Header: 'Financial Advisor',
    accessor: 'financial_advisor'
  },
  {
    Header: 'Bond Counsel',
    accessor: 'bond_counsel'
  }
]
function BondTable(props) {
  const columns = useMemo(() => cols, []);
  // const data = useMemo(() => props.bonds, []);
  const tableInstance = useTable({
    columns: columns,
    data: props.bonds
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