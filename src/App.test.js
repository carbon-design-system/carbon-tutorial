import React from 'react';
import { act } from 'react-dom/test-utils';
import RepoPage from './content/RepoPage';
import { mount } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';
import { gql } from '@apollo/client';

const REPO_QUERY = gql`
  query REPO_QUERY {
    organization(login: "carbon-design-system") {
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

const mocks = [
  {
    request: {
      query: REPO_QUERY,
    },
    result: {
      data: {
        organization: {
          repositories: {
            totalCount: 1,
            nodes: [
              {
                url: 'https://github.com/carbon-design-system/carbon',
                homepageUrl: 'https://www.carbondesignsystem.com',
                issues: { totalCount: 357, __typename: 'IssueConnection' },
                stargazers: {
                  totalCount: 3054,
                  __typename: 'StargazerConnection',
                },
                releases: {
                  totalCount: 640,
                  nodes: [{ name: '7.0.0-rc.1', __typename: 'Release' }],
                  __typename: 'ReleaseConnection',
                },
                name: 'carbon',
                updatedAt: '2020-05-27T18:55:53Z',
                createdAt: '2017-03-13T14:23:59Z',
                description: 'A design system built by IBM',
                id: 'MDEwOlJlcG9zaXRvcnk4NDgzNTUzNQ==',
                __typename: 'Repository',
              },
            ],
          },
        },
      },
    },
  },
];

it('renders a table with data and pagination', async () => {
  const wrapper = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <RepoPage />
    </MockedProvider>
  );

  expect(wrapper.find('.cds--pagination').length).toBe(0);

  await act(() => new Promise(resolve => setTimeout(resolve, 0)));

  wrapper.update();
  expect(wrapper.find('.cds--pagination').length).toBe(1);
});
