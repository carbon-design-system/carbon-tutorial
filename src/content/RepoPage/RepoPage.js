import React from 'react';
import RepoTable from './RepoTable';
import * as mock from './RepoPageMock';

const RepoPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
      <div className="bx--row repo-page__r1">
        <div className="bx--col-lg-16">
          <RepoTable headers={mock.headers} rows={mock.rows} />
        </div>
      </div>
    </div>
  );
};

export default RepoPage;
