import React from 'react';
import { Column, Grid } from '@carbon/react';
import RepoTable from './RepoTable';
import { headers, rows } from './staticData';

const RepoPage = () => {
  return (
    <Grid className="repo-page">
      <Column lg={16} md={8} sm={4} className="repo-page__r1">
        <RepoTable headers={headers} rows={rows} />
      </Column>
    </Grid>
  );
};

export default RepoPage;
