import React from 'react';
import { Link } from 'react-router-dom';
import gif404 from '../../images/404.gif';

const Page404 = () => {
  return (
    <>
      <img src={gif404} alt="nothing to see here" />
      <p>
        Nothing to see here, the page doesn&#39;t exist. Go to{' '}
        <Link to="/">Home</Link>
      </p>
    </>
  );
};

export default Page404;
