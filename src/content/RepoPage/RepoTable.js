import React, { Fragment } from 'react';
import { arrayOf, node, shape, string } from 'prop-types';
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

const getRowDescription = (rows, rowId) => {
  const row = rows.find(({ id }) => id === rowId);

  return row ? row.description : '';
};

const RepoTable = ({ dataRows, headers }) => (
  <DataTable
    headers={headers}
    rows={dataRows}
    render={({ getHeaderProps, getRowProps, getTableProps, headers, rows }) => (
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
              <Fragment key={row.id}>
                <TableExpandRow {...getRowProps({ row })}>
                  {row.cells.map(cell => (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                  ))}
                </TableExpandRow>
                <TableExpandedRow colSpan={headers.length + 1}>
                  <p>{getRowDescription(dataRows, row.id)}</p>
                </TableExpandedRow>
              </Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  />
);

RepoTable.propTypes = {
  dataRows: arrayOf(
    shape({
      id: string.isRequired,
      cells: arrayOf(
        shape({
          id: string.isRequired,
          value: node.isRequired,
        })
      ),
      description: string,
    })
  ),
  headers: arrayOf(
    shape({
      key: string.isRequired,
      header: string.isRequired,
    })
  ),
};

RepoTable.defaultProps = {
  headers: [],
  dataRows: [],
};

export default RepoTable;
