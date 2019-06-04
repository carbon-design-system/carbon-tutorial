import React from 'react';
import {
  DataTable,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableExpandedRow,
  TableExpandHeader,
  TableExpandRow,
  TableHead,
  TableHeader,
  TableRow,
} from 'carbon-components-react';

const RepoTable = ({ rows, headers }) => (
  <DataTable
    headers={headers}
    rows={rows}
    render={({ rows, headers, getHeaderProps, getRowProps, getTableProps }) => (
      <TableContainer
        description="A collection of public Carbon repositories."
        title="Carbon Repositories">
        <Table {...getTableProps()}>
          <TableHead>
            <TableRow>
              <TableExpandHeader />
              {headers.map(header => (
                <TableHeader {...getHeaderProps({ header })}>
                  {header.header}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <React.Fragment key={row.id}>
                <TableExpandRow {...getRowProps({ row })}>
                  {row.cells.map(cell => (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                  ))}
                </TableExpandRow>
                <TableExpandedRow colSpan={headers.length + 1}>
                  <p>Row description</p>
                </TableExpandedRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  />
);

export default RepoTable;
