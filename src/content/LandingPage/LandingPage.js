import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'carbon-components-react';

const LandingPage = () => {
  return (
    <div className="cds--grid cds--grid--full-width landing-page">
      <div className="cds--row landing-page__banner">
        <div className="cds--col-lg-16">
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem>
              <a href="/">Getting started</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">
            Design &amp; build with Carbon
          </h1>
        </div>
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
