import React from 'react';
import { Link } from 'carbon-components-react';

const LinkList = ({ url, homepageUrl }) => {
  return (
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
};

export default LinkList;
