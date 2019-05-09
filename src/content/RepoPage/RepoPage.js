import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  DataTable,
  Pagination,
  Search,
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

class RepoPage extends Component {
  render() {
    const initialRows = [
      {
        id: 'a',
        name: 'Issue',
        protocol: 'HTTP',
        port: 3000,
        rule: 'Round robin',
        attached_groups: 'Kevins VM Groups',
        status: 'Disabled',
      },
      {
        id: 'b',
        name: 'Load Balancer 1',
        protocol: 'HTTP',
        port: 443,
        rule: 'Round robin',
        attached_groups: 'Maureens VM Groups',
        status: 'Starting',
      },
      {
        id: 'c',
        name: 'Load Balancer 2',
        protocol: 'HTTP',
        port: 80,
        rule: 'DNS delegation',
        attached_groups: 'Andrews VM Groups',
        status: 'Active',
      },
    ];
    const headers = [
      {
        key: 'name',
        header: 'Name',
      },
      {
        key: 'protocol',
        header: 'Protocol',
      },
      {
        key: 'port',
        header: 'Port',
      },
      {
        key: 'rule',
        header: 'Rule',
      },
      {
        key: 'attached_groups',
        header: 'Attached Groups',
      },
      {
        key: 'status',
        header: 'Status',
      },
    ];
    return (
      <div className="bx--grid repo-page">
        <div className="bx--row">
          <div className="bx--col-lg-3">
            <label htmlFor="search-1" className="bx--label">
              Filter by repo
            </label>
            <Search
              labelText="Filter by repo"
              placeHolderText="Filter repo"
              id="search-1"
              small
            />
            <Checkbox checked labelText="All" id="checkbox-label-0" />
            <Checkbox labelText="Repo 1" id="checkbox-label-1" />
            <Checkbox labelText="Repo 2" id="checkbox-label-2" />
            <Checkbox labelText="Repo 3" id="checkbox-label-3" />
            <Checkbox labelText="Repo 4" id="checkbox-label-4" />
            <Button kind="ghost">See more</Button>
          </div>
          <div className="bx--col-lg-13">
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
                  title="Data table title"
                  description="Additional description if needed">
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
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est
                              laborum.
                            </p>
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
  }
}

export default RepoPage;
