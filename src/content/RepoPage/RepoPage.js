import React from 'react';
import {
  DataTable,
  Pagination,
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

const RepoPage = () => {
  const initialRows = [
    {
      id: '1',
      name: 'Repo 1',
      createdAt: 'Date',
      updatedAt: 'Date',
      issueCount: '123',
      stars: '456',
      links: 'Links',
    },
    {
      id: '2',
      name: 'Repo 2',
      createdAt: 'Date',
      updatedAt: 'Date',
      issueCount: '123',
      stars: '456',
      links: 'Links',
    },
    {
      id: '3',
      name: 'Repo 3',
      createdAt: 'Date',
      updatedAt: 'Date',
      issueCount: '123',
      stars: '456',
      links: 'Links',
    },
  ];

  const headers = [
    {
      key: 'name',
      header: 'Name',
    },
    {
      key: 'createdAt',
      header: 'Created',
    },
    {
      key: 'updatedAt',
      header: 'Updated',
    },
    {
      key: 'issueCount',
      header: 'Open Issues',
    },
    {
      key: 'stars',
      header: 'Stars',
    },
    {
      key: 'links',
      header: 'Links',
    },
  ];

  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
      <div className="bx--row repo-page__r1">
        <div className="bx--col-lg-16">
          <DataTable
            rows={initialRows}
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
                          <h1>Expandable row content</h1>
                          <p>Description here</p>
                        </TableExpandedRow>
                      </React.Fragment>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          />
          <Pagination
            totalItems={1228}
            backwardText="Previous page"
            forwardText="Next page"
            pageSize={100}
            pageSizes={[10, 25, 50, 100]}
            itemsPerPageText="Items per page"
          />
        </div>
      </div>
    </div>
  );
};

export default RepoPage;
