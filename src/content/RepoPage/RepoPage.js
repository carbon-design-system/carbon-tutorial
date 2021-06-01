import React, { useEffect, useState } from 'react';
import { Link, DataTableSkeleton, Pagination } from 'carbon-components-react';
import { useQuery } from '@apollo/client';

import RepoTable from './RepoTable';
import { REPO_QUERY } from './query';

export default function RepoPage() {
  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
      <div className="bx--row repo-page__r1">
        <div className="bx--col-lg-16">
          <RepoData />
        </div>
      </div>
    </div>
  );
}

function RepoData() {
  const { loading, error, data } = useQuery(REPO_QUERY);
  const [totalItems, setTotalItems] = useState(0);
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);

  console.log(data?.organization);

  useEffect(() => {
    if (data) {
      setTotalItems(data.organization.repositories.totalCount);
    }
  }, [data]);

  const getRowItems = rows =>
    rows.map(row => ({
      ...row,
      key: row.id,
      stars: row.stargazers.totalCount,
      issueCount: row.issues.totalCount,
      createdAt: new Date(row.createdAt).toLocaleDateString(),
      updatedAt: new Date(row.updatedAt).toLocaleDateString(),
      links: <LinkList url={row.url} homepageUrl={row.homepageUrl} />,
    }));

  // Wait for the request to complete
  if (loading)
    return (
      <DataTableSkeleton
        columnCount={headers.length + 1}
        rowCount={10}
        headers={headers}
      />
    );
  // Something went wrong with the data fetching
  if (error) return `Error! ${error.message}`;

  // If we're here, we've got our data!
  const rows = getRowItems(data?.organization.repositories.nodes);

  return (
    <>
      <RepoTable
        headers={headers}
        rows={rows.slice(firstRowIndex, firstRowIndex + currentPageSize)}
      />
      <Pagination
        totalItems={totalItems}
        backwardText="Previous page"
        forwardText="Next page"
        pageSize={currentPageSize}
        pageSizes={[5, 10, 15, 25]}
        itemsPerPageText="Items per page"
        onChange={({ page, pageSize }) => {
          if (pageSize !== currentPageSize) {
            setCurrentPageSize(pageSize);
          }
          setFirstRowIndex(pageSize * (page - 1));
        }}
      />
    </>
  );
}

function LinkList({ url, homepageUrl }) {
  return (
    <ul style={{ display: 'flex' }}>
      <li>
        <Link href={url}>GitHub</Link>
      </li>
      {homepageUrl && (
        <li>
          <span>&nbsp;|&nbsp;</span>
          <Link href={homepageUrl}>Homepage</Link>
        </li>
      )}
    </ul>
  );
}

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
