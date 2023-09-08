import React, { useEffect, useState } from 'react';
import RepoTable from './RepoTable';
import {
  Link,
  DataTableSkeleton,
  Grid,
  Column,
  Pagination,
} from '@carbon/react';
import { Octokit } from '@octokit/core'; // Package to query github APIs

const octokitClient = new Octokit({}); //Client used to query table data

// Table links -> If there is no homepahe url, renders only the repo one
const LinkList = ({ url, homepageUrl }) => (
  <ul style={{ display: 'flex', justifyContent: 'center' }}>
    <li>
      <Link href={url}>GitHub</Link>
    </li>

    {homepageUrl && (
      <>
        <span>&nbsp;|&nbsp;</span>
        <li>
          <Link href={homepageUrl}>Homepage</Link>
        </li>
      </>
    )}
  </ul>
);

// Getting rows information (and using the LinkList config)
const getRowItems = rows =>
  rows.map(row => ({
    ...row,
    key: row.id,
    stars: row.stargazers_count,
    issueCount: row.open_issues_count,
    createdAt: new Date(row.created_at).toLocaleDateString(),
    updatedAt: new Date(row.updated_at).toLocaleDateString(),
    links: <LinkList url={row.html_url} homepageUrl={row.homepage} />,
  }));

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

const RepoPage = () => {
  // Used for pagination
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(10);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function getCarbonRepos() {
      const res = await octokitClient.request('GET /orgs/{org^/repos', {
        org: 'carbon-design-system', //organization that owns the repos
        per_page: 75, //Repos per page
        sort: 'updated', //Sorted by update date
        direction: 'desc', //Most recent to least recent update
      });

      // If the data arrives, show on console, else the console shows an error message.
      if (res.status === 200) {
        // Sends the responde to the getRowItems function
        setRows(getRowItems(res.data));
      } else {
        setError('Error obtaining repository data');
      }
      setLoading(false);
    }

    getCarbonRepos();
  }, []);

  // If it's loading, return the table with the little loading rectangles instead of data (there's no data yet)
  if (loading) {
    return (
      // Basically same table as the data one, but instead of DataTable we use the Skeleton one
      <Grid className="repo-page">
        <Column lg={16} md={8} sm={4} className="repo-page__r1">
          <DataTableSkeleton
            columnCount={headers.length + 1}
            rowCount={10}
            headers={headers}
          />
        </Column>
      </Grid>
    );
  }

  if (error) {
    return `Something went wrong. Please try again later. Error ${error}`;
  }

  return (
    <Grid className="repo-page">
      <Column lg={16} md={8} sm={4} className="repo-page__r1">
        <RepoTable
          headers={headers}
          rows={rows.slice(firstRowIndex, firstRowIndex + currentPageSize)} // Makes the pagination -> Initial item index + amount of rows per page
        />
        <Pagination
          totalItems={rows.length}
          backwardText="Previous page"
          forwardText="Next page"
          pageSize={currentPageSize}
          pageSizes={[5, 10, 15, 25]} //Select how many itens per page you want to see
          itemsPerPageText="Items per page"
          onChange={({ page, pageSize }) => {
            if (pageSize !== currentPageSize) {
              setCurrentPageSize(pageSize);
            }
            setFirstRowIndex(pageSize * (page - 1));
          }}
        />
      </Column>
    </Grid>
  );
};

export default RepoPage;
