import React from 'react';
import RepoTable from './RepoTable';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const RepoPage = () => {
  const REPO_QUERY = gql`
    query REPO_QUERY {
      # Let's use carbon as our organization
      organization(login: "carbon-design-system") {
        # We'll grab all the repositories in one go. To load more resources
        # continuously, see the advanced topics.
        repositories(
          first: 75
          orderBy: { field: UPDATED_AT, direction: DESC }
        ) {
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

  const rows = [
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

  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
      <div className="bx--row repo-page__r1">
        <div className="bx--col-lg-16">
          <RepoTable headers={headers} rows={rows} />
        </div>
      </div>
    </div>
  );
};

export default RepoPage;
