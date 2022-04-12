import React from 'react';

const LandingPage = () => {
  return (
    <div className="cds--grid cds--grid--full-width landing-page">
      <div className="cds--row landing-page__banner">
        <div className="cds--col-lg-16">1</div>
      </div>
      <div className="cds--row landing-page__r2">
        <div className="cds--col-md-4 cds--col-lg-7">7/16</div>
        <div className="cds--col-md-4 cds--offset-lg-1 cds--col-lg-8">8/16</div>
      </div>
      <div className="cds--row landing-page__r3">
        <div className="cds--col-md-4 cds--col-lg-4">1/4</div>
        <div className="cds--col-md-4 cds--col-lg-4">1/4</div>
        <div className="cds--col-md-4 cds--col-lg-4">1/4</div>
        <div className="cds--col-md-4 cds--col-lg-4">1/4</div>
      </div>
    </div>
  );
};

export default LandingPage;
