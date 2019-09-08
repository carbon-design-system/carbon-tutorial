import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import { DataTableSkeleton, Link, Pagination } from 'carbon-components-react';

import RepoTable from './RepoTable';

const REPO_QUERY = gql`
  query REPO_QUERY {
    # Let's use carbon as our organization
    organization(login: "carbon-design-system") {
      # We'll grab all the repositories in one go. To load more resources
      # continuously, see the advanced topics.
      repositories(first: 75, orderBy: { field: UPDATED_AT, direction: DESC }) {
        totalCount
        nodes {
          url
          homepageUrl
          issues(filterBy: { states: OPEN }) {
            totalCount
          }
          stargazers {
            totalCount
          }
          releases(first: 1) {
            totalCount
            nodes {
              name
            }
          }
          name
          updatedAt
          createdAt
          description
          id
        }
      }
    }
  }
`;

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

function makeRowItem(row) {
  const {
    id,
    stargazers,
    issues,
    createdAt,
    updatedAt,
    url,
    homepageUrl,
  } = row;
  const links = <LinkList url={url} homepageUrl={homepageUrl} />;
  const formatDate = v => new Date(v).toLocaleDateString();

  const result = {
    ...row,
    key: id,
    stars: stargazers.totalCount,
    issueCount: issues.totalCount,
    createdAt: formatDate(createdAt),
    updatedAt: formatDate(updatedAt),
    links,
  };

  return result;
}

const getRowItems = rows => rows.map(makeRowItem);

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

const RepoTableSkeleton = () => (
  <DataTableSkeleton
    columnCount={headers.length + 1}
    headers={headers}
    rowCount={10}
  />
);

function paginationChanged(
  { currentPageSize, setCurrentPageSize, setFirstRowIndex },
  { page, pageSize }
) {
  if (pageSize !== currentPageSize) {
    setCurrentPageSize(pageSize);
  }
  setFirstRowIndex(pageSize * (page - 1));
}

function RepoPagination({ pagination }) {
  const pr = {
    backwardText: 'Previous page',
    forwardText: 'Next page',
    itemsPerPageText: 'Items per page',
    pageSize: pagination.currentPageSize,
    pageSizes: [5, 10, 15, 25],
    totalItems: pagination.totalItems,
  };

  return (
    <Pagination {...pr} onChange={v => paginationChanged(pagination, v)} />
  );
}

function renderRepoTable(count, nodes, pagination) {
  pagination.setTotalItems(count);

  const rows = getRowItems(nodes).slice(
    pagination.firstRowIndex,
    pagination.firstRowIndex + pagination.currentPageSize
  );

  const result = (
    <>
      <RepoTable {...{ headers, rows }} />
      <RepoPagination pagination={pagination} />
    </>
  );

  return result;
}

function processQueryResults(
  pagination,
  { loading, error, data: { organization } }
) {
  let result;

  if (loading) {
    result = <RepoTableSkeleton />;
  } else if (error) {
    result = `Error! ${error.message}`;
  } else {
    result = renderRepoTable(
      organization.repositories.totalCount,
      organization.repositories.nodes,
      pagination
    );
  }
  return result;
}

const RepoPage = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);

  const pagination = {
    totalItems,
    setTotalItems,
    firstRowIndex,
    setFirstRowIndex,
    currentPageSize,
    setCurrentPageSize,
  };

  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
      <div className="bx--row repo-page__r1">
        <div className="bx--col-lg-16">
          <Query query={REPO_QUERY}>
            {processQueryResults.bind(null, pagination)}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default RepoPage;
