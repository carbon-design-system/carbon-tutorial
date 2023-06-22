import React from 'react';
import LinkList from './components/LinkList';

export function getRowItems(rows) {
  return rows.map(row => ({
    ...row,
    key: row.id,
    stars: row.stargazers_count,
    issueCount: row.open_issues_count,
    createdAt: new Date(row.created_at).toLocaleDateString(),
    updatedAt: new Date(row.updated_at).toLocaleDateString(),
    links: <LinkList url={row.html_url} homepageUrl={row.homepage} />,
  }));
}

export function getRowDescription(rows, rowId) {
  const row = rows.find(({ id }) => id === rowId);
  return row ? row.description : '';
}
