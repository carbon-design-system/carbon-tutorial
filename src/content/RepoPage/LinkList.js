import React from 'react';
import { string } from 'prop-types';
import { Link } from 'carbon-components-react';

const LinkList = ({ homepageUrl, url }) => (
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

LinkList.propTypes = {
  homepageUrl: string,
  url: string.isRequired,
};

LinkList.defaultProps = {
  homepageUrl: '',
};

export default LinkList;
