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
  // rows: um array com os dados para serem colocados na tabela
  // headers: são os titulos das colunas

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
      }) => (
        <TableContainer
          title="Carbon Repositories"
          description="A collection of public Carbon repositories.">
          <Table {...getTableProps()}>
            {/* HEAD DA TABELA */}
            <TableHead>
              <TableRow>
                <TableExpandHeader />
                {/* TITULO DAS COLUNAS  */}
                {headers.map(header => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            {/* BODY DA TABELA */}
            <TableBody>
              {/* LINHAS DA TABELA */}
              {rows.map(row => (
                <React.Fragment key={row.id}>
                  {/* LINHA */}
                  <TableExpandRow {...getRowProps({ row })}>
                    {row.cells.map(cell => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableExpandRow>
                  {/* LINHA QUANDO O BOTÃO DE EXPANDIR É CLICADO */}
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
