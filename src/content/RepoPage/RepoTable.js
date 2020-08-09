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
  // The DataTable component filters the data accessible to its subcomponents
  // in the render method, by the attributes that are specified in the headers
  // of the column. This prevents us from accessing the description that
  // instead should be placed in the expanded section of the table. We then
  // define this function in the scope of the containing component which still
  // has access to the unfiltered data and we implement the capability to search
  // for the description.
  //
  const getRowDescription = rowId => {
    const row = rows.find(({ id }) => id === rowId);
    return row ? row.description : '';
  };

  return (
    <DataTable
      rows={rows}
      headers={headers}
      render={({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getTableProps,
      }) => {
        console.log(rows);
        return (
          <TableContainer
            title="Carbon Repositories"
            description="A collection of public Carbon repositories.">
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
                {rows.map(row => {
                  return (
                    <React.Fragment key={row.id}>
                      <TableExpandRow {...getRowProps({ row })}>
                        {row.cells.map(cell => (
                          <TableCell key={cell.id}>{cell.value}</TableCell>
                        ))}
                      </TableExpandRow>
                      <TableExpandedRow colSpan={headers.length + 1}>
                        <p>{getRowDescription(row.id)}</p>
                      </TableExpandedRow>
                    </React.Fragment>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        );
      }}
    />
  );
};

export default RepoTable;
