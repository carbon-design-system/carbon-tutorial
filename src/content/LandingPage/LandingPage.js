import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
} from 'carbon-components-react';

const props = {
  tabs: {
    selected: 0,
    role: 'navigation',
  },
  tab: {
    role: 'presentation',
    tabIndex: 0,
  },
};

const LandingPage = () => {
  return (
    <div className="cds--grid cds--grid--full-width landing-page">
      <div className="cds--row landing-page__banner">
        <div className="cds--col-lg-16">
          <Breadcrumb noTrailingSlash aria-label="Page navigation">
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
        <div className="cds--col cds--no-gutter">
          <Tabs {...props.tabs} aria-label="Tab navigation">
            <Tab {...props.tab} label="About">
              <div className="cds--grid cds--grid--no-gutter cds--grid--full-width">
                <div className="cds--row landing-page__tab-content">
                  <div className="cds--col-md-4 cds--col-lg-7">7/16</div>
                  <div className="cds--col-md-4 cds--offset-lg-1 cds--col-lg-8">
                    8/16
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Design">
              <div className="cds--grid cds--grid--no-gutter cds--grid--full-width">
                <div className="cds--row landing-page__tab-content">
                  <div className="cds--col-lg-16">
                    Rapidly build beautiful and accessible experiences. The
                    Carbon kit contains all resources you need to get started.
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="Develop">
              <div className="cds--grid cds--grid--no-gutter cds--grid--full-width">
                <div className="cds--row landing-page__tab-content">
                  <div className="cds--col-lg-16">
                    Carbon provides styles and components in Vanilla, React,
                    Angular, and Vue for anyone building on the web.
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
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
