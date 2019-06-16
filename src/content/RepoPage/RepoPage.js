import React, { useState, useEffect } from 'react';
import RepoTable from './RepoTable';
import { Link, DataTableSkeleton, Pagination } from 'carbon-components-react';
import { graphql } from 'react-apollo';
import { loader } from 'graphql.macro';

import { headers } from './data';

const GET_CARBON_REPO_LIST = loader('./gql/getCarbonRepoList.gql');
const defaultOrganization = { repositories: [] };

const RepoPage = ({
  data: { loading, error, organization = defaultOrganization },
}) => {
  const [totalItems, setTotalItems] = useState(0);
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);

  useEffect(() => {
    const { repositories } = organization;
    setTotalItems(repositories.totalCount);
  }, [organization]);

  const LinkList = ({ url, homepageUrl }) => (
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

  const renderDataTable = () => {
    const { repositories } = organization;
    const rows = getRowItems(repositories.nodes);
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
  };

  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
      <div className="bx--row repo-page__r1">
        <div className="bx--col-lg-16">
          {loading ? (
            <DataTableSkeleton
              columnCount={headers.length + 1}
              rowCount={currentPageSize}
              headers={headers}
            />
          ) : error ? (
            'ERROR...'
          ) : (
            renderDataTable()
          )}
        </div>
      </div>
    </div>
  );
};

export default graphql(GET_CARBON_REPO_LIST)(RepoPage);
