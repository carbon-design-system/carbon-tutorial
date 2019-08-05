import React from 'react';

import RepoTable from './RepoTable';

const headers = [
  ['name', 'Name'],
  ['createdAt', 'Created'],
  ['updatedAt', 'Updated'],
  ['issueCount', 'Open Issues'],
  ['stars', 'Stars'],
  ['links', 'Links'],
].map(a => ({ key: a[0], header: a[1] }));

const rows = [1, 2, 3].map(n => ({
  id: `${n}`,
  name: `Repo ${n}`,
  createdAt: 'Date',
  updatedAt: 'Date',
  issueCount: '123',
  stars: '456',
  links: 'Links',
}));

export default function RepoPage() {
  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
      <div className="bx--row repo-page__r1">
        <div className="bx--col-lg-16">
          <RepoTable {...{ headers, rows }} />
        </div>
      </div>
    </div>
  );
}
