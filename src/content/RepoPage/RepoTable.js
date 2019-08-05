import React, { Fragment } from 'react';
import * as cc from 'carbon-components-react';

function RepoTableHeadRow({ headers, getHeaderProps }) {
  return (
    <cc.TableRow>
      <cc.TableExpandHeader />
      {headers.map(h => (
        <cc.TableHeader {...getHeaderProps({ header: h })}>
          {h.header}
        </cc.TableHeader>
      ))}
    </cc.TableRow>
  );
}

function RepoTableRow({ row, getRowProps, descColSpan }) {
  return (
    <Fragment>
      <cc.TableExpandRow {...getRowProps({ row })}>
        {row.cells.map(rc => (
          <cc.TableCell key={rc.id}>{rc.value}</cc.TableCell>
        ))}
      </cc.TableExpandRow>
      <cc.TableExpandedRow colSpan={descColSpan}>
        <p>Row description</p>
      </cc.TableExpandedRow>
    </Fragment>
  );
}

function RepoTableContainer({
  headers,
  rows,
  getTableProps,
  getHeaderProps,
  getRowProps,
}) {
  return (
    <cc.TableContainer
      description="A collection of public Carbon repositories"
      title="Carbon Repositories">
      <cc.Table {...getTableProps()}>
        <cc.TableHead>
          <RepoTableHeadRow {...{ headers, getHeaderProps }} />
        </cc.TableHead>
        <cc.TableBody>
          {rows.map(r => (
            <RepoTableRow
              key={r.id}
              row={r}
              getRowProps={getRowProps}
              descColSpan={headers.length + 1}
            />
          ))}
        </cc.TableBody>
      </cc.Table>
    </cc.TableContainer>
  );
}

export default function RepoTable(props) {
  return (
    <cc.DataTable {...props} render={pr => <RepoTableContainer {...pr} />} />
  );
}
