import React from 'react';
import RepoTable from './RepoTable';
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
  {
    id: '4',
    name: 'Repo 4',
    createdAt: 'Date',
    updatedAt: 'Date',
    issueCount: '789',
    stars: '451',
    links: 'Links',
  },
  {
    id: '5',
    name: 'Repo 5',
    createdAt: '01-Jul-2019',
    updatedAt: '27-Jul-2019',
    issueCount: '135',
    stars: '791',
    links: 'Links',
  },
];

const RepoPage = () => {
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
