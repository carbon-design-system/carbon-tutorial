import React from 'react';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableExpandHeader,
  TableHeader,
  TableBody,
  TableExpandRow,
  TableCell,
  TableExpandedRow,
} from 'carbon-components-react';

const RepoTable = ({ rows, headers }) => {
  return (
    <DataTable
      rows={rows}
      headers={headers}
      render={({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getTableProps /*,*/,
      }) => (
        <TableContainer
          title="Carbon Repositories"
          description="A collection of public Carbon repositories.">
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                <TableExpandHeader />
                {headers.map(aheader => (
                  <TableHeader {...getHeaderProps({ header: aheader })}>
                    {aheader.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(arow => (
                <React.Fragment key={arow.id}>
                  <TableExpandRow {...getRowProps({ row: arow })}>
                    {arow.cells.map(acell => (
                      <TableCell key={acell.id}>{acell.value}</TableCell>
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
};

export default RepoTable;
