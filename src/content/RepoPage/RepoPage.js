import React from 'react';
import RepoTable from './RepoTable';
import { Grid, Column } from '@carbon/react';

import { headers, rows } from './repoTableData';

const RepoPage = () => {
  return (
    <Grid className="repo-page">
      <Column lg={16} className="repo-page__r1">
        <RepoTable headers={headers} rows={rows} />
      </Column>
    </Grid>
  );
};

export default RepoPage;
