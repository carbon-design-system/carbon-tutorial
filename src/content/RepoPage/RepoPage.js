import React, { useState } from 'react';
import { Query } from 'react-apollo';
import { DataTableSkeleton, Pagination } from 'carbon-components-react';

import LinkList from './LinkList';
import RepoTable from './RepoTable';
import { repoPage } from '../../quaries';

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

const getRowItems = rows =>
  rows.map(row => ({
    ...row,
    key: row.id,
    createdAt: new Date(row.createdAt).toLocaleDateString(),
    issueCount: row.issues.totalCount,
    links: <LinkList url={row.url} homepageUrl={row.homepageUrl} />,
    stars: row.stargazers.totalCount,
    updatedAt: new Date(row.updatedAt).toLocaleDateString(),
  }));

const RepoPage = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);

  const onPageChange = ({ page, pageSize }) => {
    if (pageSize !== currentPageSize) {
      setCurrentPageSize(pageSize);
    }

    setFirstRowIndex(pageSize * (page - 1));
  };

  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
      <div className="bx--row repo-page__r1">
        <div className="bx--col-lg-16">
          <Query query={repoPage.REPO_QUERY}>
            {({ data: { organization }, error, loading }) => {
              // Wait for the request to complete
              if (loading) {
                return (
                  <DataTableSkeleton
                    columnCount={headers.length + 1}
                    headers={headers}
                    rowCount={10}
                  />
                );
              }

              // Something went wrong with the data fetching
              if (error) {
                return `Error! ${error.message}`;
              }

              // If we're here, we've got our data!
              const { repositories } = organization;
              setTotalItems(repositories.totalCount);
              const rows = getRowItems(repositories.nodes);

              return (
                <>
                  <RepoTable
                    dataRows={rows.slice(
                      firstRowIndex,
                      firstRowIndex + currentPageSize
                    )}
                    headers={headers}
                  />
                  <Pagination
                    backwardText="Previous page"
                    forwardText="Next page"
                    itemsPerPageText="Items per page"
                    onChange={onPageChange}
                    pageSize={currentPageSize}
                    pageSizes={[5, 10, 15, 25]}
                    totalItems={totalItems}
                  />
                </>
              );
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default RepoPage;
